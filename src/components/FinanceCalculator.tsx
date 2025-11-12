import { useState, useEffect } from 'react';
import { DollarSign, TrendingUp, PiggyBank, CreditCard, Home, Zap, ShoppingCart, Heart, Calculator, AlertCircle, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface FinancialData {
  monthlyIncome: number;
  monthlyRentMortgage: number;
  monthlyUtilities: number;
  monthlyGroceries: number;
  monthlyInsurance: number;
  monthlyDebtPayments: number;
  monthlyOtherExpenses: number;
  savingsGoalPercentage: number;
  emergencyFund: number;
  creditScoreRange: string;
  downPaymentAvailable: number;
}

interface AffordabilityResult {
  maxMonthlyPayment: number;
  recommendedPayment: number;
  disposableIncome: number;
  totalExpenses: number;
  financialHealthScore: number;
  recommendations: string[];
  warnings: string[];
}

export default function FinanceCalculator() {
  const [step, setStep] = useState(1);
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const [financialData, setFinancialData] = useState<FinancialData>({
    monthlyIncome: 0,
    monthlyRentMortgage: 0,
    monthlyUtilities: 0,
    monthlyGroceries: 0,
    monthlyInsurance: 0,
    monthlyDebtPayments: 0,
    monthlyOtherExpenses: 0,
    savingsGoalPercentage: 10,
    emergencyFund: 0,
    creditScoreRange: 'Good',
    downPaymentAvailable: 0,
  });
  const [result, setResult] = useState<AffordabilityResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const updateField = (field: keyof FinancialData, value: number | string) => {
    setFinancialData(prev => ({ ...prev, [field]: value }));
  };

  const calculateAffordability = async () => {
    setIsCalculating(true);

    const totalExpenses =
      financialData.monthlyRentMortgage +
      financialData.monthlyUtilities +
      financialData.monthlyGroceries +
      financialData.monthlyInsurance +
      financialData.monthlyDebtPayments +
      financialData.monthlyOtherExpenses;

    const savingsAmount = financialData.monthlyIncome * (financialData.savingsGoalPercentage / 100);
    const disposableIncome = financialData.monthlyIncome - totalExpenses - savingsAmount;

    const debtToIncomeRatio = (financialData.monthlyDebtPayments / financialData.monthlyIncome) * 100;
    const housingRatio = (financialData.monthlyRentMortgage / financialData.monthlyIncome) * 100;
    const hasEmergencyFund = financialData.emergencyFund >= (financialData.monthlyIncome * 3);

    let maxMonthlyPayment = disposableIncome * 0.15;
    let recommendedPayment = disposableIncome * 0.10;

    const recommendations: string[] = [];
    const warnings: string[] = [];

    let financialHealthScore = 100;

    if (debtToIncomeRatio > 36) {
      financialHealthScore -= 20;
      warnings.push("Your debt-to-income ratio is high. Consider reducing existing debt before taking on a car payment.");
      maxMonthlyPayment *= 0.7;
      recommendedPayment *= 0.7;
    } else if (debtToIncomeRatio > 20) {
      financialHealthScore -= 10;
      recommendations.push("Your debt ratio is moderate. A smaller car payment would be wiser.");
      maxMonthlyPayment *= 0.85;
      recommendedPayment *= 0.85;
    } else {
      recommendations.push("Great debt management! You have good flexibility for a car payment.");
    }

    if (housingRatio > 30) {
      financialHealthScore -= 15;
      warnings.push("Housing costs are high relative to income. Be conservative with car payments.");
      maxMonthlyPayment *= 0.8;
      recommendedPayment *= 0.8;
    }

    if (!hasEmergencyFund) {
      financialHealthScore -= 15;
      warnings.push("Build an emergency fund of 3-6 months expenses before committing to a car payment.");
      maxMonthlyPayment *= 0.75;
      recommendedPayment *= 0.75;
    } else {
      recommendations.push("Excellent emergency fund! You're well-prepared for unexpected expenses.");
    }

    if (financialData.creditScoreRange === 'Excellent') {
      recommendations.push("Your excellent credit qualifies you for the best interest rates!");
      financialHealthScore += 10;
    } else if (financialData.creditScoreRange === 'Good') {
      recommendations.push("Good credit score! You'll qualify for competitive rates.");
    } else if (financialData.creditScoreRange === 'Fair') {
      financialHealthScore -= 10;
      recommendations.push("Consider improving your credit score for better lease terms.");
      maxMonthlyPayment *= 0.9;
      recommendedPayment *= 0.9;
    } else {
      financialHealthScore -= 20;
      warnings.push("Your credit score may limit financing options. Work on improving it first.");
      maxMonthlyPayment *= 0.75;
      recommendedPayment *= 0.75;
    }

    if (financialData.downPaymentAvailable >= 2000) {
      recommendations.push(`With $${financialData.downPaymentAvailable.toLocaleString()} down payment, you can lower monthly costs significantly!`);
      financialHealthScore += 5;
    }

    if (financialData.savingsGoalPercentage >= 15) {
      recommendations.push("Excellent savings discipline! This gives you financial flexibility.");
      financialHealthScore += 5;
    } else if (financialData.savingsGoalPercentage < 5) {
      warnings.push("Consider increasing your savings rate before adding new expenses.");
      financialHealthScore -= 10;
    }

    if (disposableIncome < 500) {
      warnings.push("Very tight budget. Any car payment will significantly impact your finances.");
      financialHealthScore -= 25;
    } else if (disposableIncome < 1000) {
      warnings.push("Limited financial cushion. Choose the most affordable option.");
      financialHealthScore -= 15;
    }

    const expenseRatio = (totalExpenses / financialData.monthlyIncome) * 100;
    if (expenseRatio > 80) {
      warnings.push("Expenses are consuming most of your income. Reduce costs before leasing.");
      maxMonthlyPayment *= 0.6;
      recommendedPayment *= 0.6;
      financialHealthScore -= 20;
    }

    financialHealthScore = Math.max(0, Math.min(100, financialHealthScore));

    if (maxMonthlyPayment < 200) {
      maxMonthlyPayment = Math.min(disposableIncome * 0.3, 200);
      warnings.push("Based on your finances, we recommend waiting or exploring very budget-friendly options.");
    }

    const affordabilityResult: AffordabilityResult = {
      maxMonthlyPayment: Math.round(maxMonthlyPayment),
      recommendedPayment: Math.round(recommendedPayment),
      disposableIncome: Math.round(disposableIncome),
      totalExpenses: Math.round(totalExpenses),
      financialHealthScore: Math.round(financialHealthScore),
      recommendations,
      warnings,
    };

    setResult(affordabilityResult);

    try {
      await supabase.from('user_financial_profiles').insert({
        session_id: sessionId,
        monthly_income: financialData.monthlyIncome,
        monthly_rent_mortgage: financialData.monthlyRentMortgage,
        monthly_utilities: financialData.monthlyUtilities,
        monthly_groceries: financialData.monthlyGroceries,
        monthly_insurance: financialData.monthlyInsurance,
        monthly_debt_payments: financialData.monthlyDebtPayments,
        monthly_other_expenses: financialData.monthlyOtherExpenses,
        savings_goal_percentage: financialData.savingsGoalPercentage,
        emergency_fund: financialData.emergencyFund,
        credit_score_range: financialData.creditScoreRange,
        down_payment_available: financialData.downPaymentAvailable,
        calculated_max_payment: affordabilityResult.maxMonthlyPayment,
      });
    } catch (error) {
      console.error('Error saving financial profile:', error);
    }

    setIsCalculating(false);
    setStep(4);
  };

  const resetCalculator = () => {
    setStep(1);
    setResult(null);
    setFinancialData({
      monthlyIncome: 0,
      monthlyRentMortgage: 0,
      monthlyUtilities: 0,
      monthlyGroceries: 0,
      monthlyInsurance: 0,
      monthlyDebtPayments: 0,
      monthlyOtherExpenses: 0,
      savingsGoalPercentage: 10,
      emergencyFund: 0,
      creditScoreRange: 'Good',
      downPaymentAvailable: 0,
    });
  };

  const renderProgressBar = () => {
    const progress = (step / 4) * 100;
    return (
      <div className="mb-8">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-600">Step {step} of 4</span>
          <span className="text-gray-600">{Math.round(progress)}%</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-red-500 to-red-600 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    );
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Let's Start with Your Income</h2>
        <p className="text-gray-600">Understanding your income helps us calculate what you can truly afford.</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <DollarSign className="w-4 h-4 mr-2 text-red-600" />
            Monthly Take-Home Income (After Taxes)
          </label>
          <input
            type="number"
            value={financialData.monthlyIncome || ''}
            onChange={(e) => updateField('monthlyIncome', parseFloat(e.target.value) || 0)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="e.g., 4500"
          />
          <p className="text-xs text-gray-500 mt-1">Your actual monthly income after taxes and deductions</p>
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <PiggyBank className="w-4 h-4 mr-2 text-red-600" />
            Emergency Fund Savings
          </label>
          <input
            type="number"
            value={financialData.emergencyFund || ''}
            onChange={(e) => updateField('emergencyFund', parseFloat(e.target.value) || 0)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="e.g., 10000"
          />
          <p className="text-xs text-gray-500 mt-1">Aim for 3-6 months of expenses saved</p>
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <TrendingUp className="w-4 h-4 mr-2 text-red-600" />
            Monthly Savings Goal (%)
          </label>
          <input
            type="range"
            min="0"
            max="30"
            value={financialData.savingsGoalPercentage}
            onChange={(e) => updateField('savingsGoalPercentage', parseFloat(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>0%</span>
            <span className="font-medium text-red-600">{financialData.savingsGoalPercentage}%</span>
            <span>30%</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            You'll save ${Math.round(financialData.monthlyIncome * (financialData.savingsGoalPercentage / 100))} per month
          </p>
        </div>
      </div>

      <button
        onClick={() => setStep(2)}
        disabled={financialData.monthlyIncome === 0}
        className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Continue to Expenses
      </button>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Monthly Expenses</h2>
        <p className="text-gray-600">Let's understand where your money goes each month.</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Home className="w-4 h-4 mr-2 text-red-600" />
            Rent or Mortgage Payment
          </label>
          <input
            type="number"
            value={financialData.monthlyRentMortgage || ''}
            onChange={(e) => updateField('monthlyRentMortgage', parseFloat(e.target.value) || 0)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="e.g., 1500"
          />
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Zap className="w-4 h-4 mr-2 text-red-600" />
            Utilities (Electric, Water, Gas, Internet)
          </label>
          <input
            type="number"
            value={financialData.monthlyUtilities || ''}
            onChange={(e) => updateField('monthlyUtilities', parseFloat(e.target.value) || 0)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="e.g., 250"
          />
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <ShoppingCart className="w-4 h-4 mr-2 text-red-600" />
            Groceries and Food
          </label>
          <input
            type="number"
            value={financialData.monthlyGroceries || ''}
            onChange={(e) => updateField('monthlyGroceries', parseFloat(e.target.value) || 0)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="e.g., 400"
          />
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Heart className="w-4 h-4 mr-2 text-red-600" />
            Insurance (Health, Life, etc.)
          </label>
          <input
            type="number"
            value={financialData.monthlyInsurance || ''}
            onChange={(e) => updateField('monthlyInsurance', parseFloat(e.target.value) || 0)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="e.g., 200"
          />
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Calculator className="w-4 h-4 mr-2 text-red-600" />
            Other Monthly Expenses
          </label>
          <input
            type="number"
            value={financialData.monthlyOtherExpenses || ''}
            onChange={(e) => updateField('monthlyOtherExpenses', parseFloat(e.target.value) || 0)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="e.g., 300"
          />
          <p className="text-xs text-gray-500 mt-1">Entertainment, subscriptions, gym, etc.</p>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Total Monthly Expenses:</span>
            <span className="font-bold text-gray-900">
              ${(
                financialData.monthlyRentMortgage +
                financialData.monthlyUtilities +
                financialData.monthlyGroceries +
                financialData.monthlyInsurance +
                financialData.monthlyOtherExpenses
              ).toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => setStep(1)}
          className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
        >
          Back
        </button>
        <button
          onClick={() => setStep(3)}
          className="flex-1 bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Debt & Credit Profile</h2>
        <p className="text-gray-600">This helps us understand your financial flexibility.</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <CreditCard className="w-4 h-4 mr-2 text-red-600" />
            Monthly Debt Payments
          </label>
          <input
            type="number"
            value={financialData.monthlyDebtPayments || ''}
            onChange={(e) => updateField('monthlyDebtPayments', parseFloat(e.target.value) || 0)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="e.g., 350"
          />
          <p className="text-xs text-gray-500 mt-1">Credit cards, student loans, personal loans, etc.</p>
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <TrendingUp className="w-4 h-4 mr-2 text-red-600" />
            Credit Score Range
          </label>
          <select
            value={financialData.creditScoreRange}
            onChange={(e) => updateField('creditScoreRange', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
          >
            <option value="Excellent">Excellent (750+)</option>
            <option value="Good">Good (700-749)</option>
            <option value="Fair">Fair (650-699)</option>
            <option value="Poor">Poor (Below 650)</option>
          </select>
          <p className="text-xs text-gray-500 mt-1">Your credit score affects interest rates</p>
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <DollarSign className="w-4 h-4 mr-2 text-red-600" />
            Available Down Payment
          </label>
          <input
            type="number"
            value={financialData.downPaymentAvailable || ''}
            onChange={(e) => updateField('downPaymentAvailable', parseFloat(e.target.value) || 0)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="e.g., 3000"
          />
          <p className="text-xs text-gray-500 mt-1">Cash you can put down (lowers monthly payment)</p>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => setStep(2)}
          className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
        >
          Back
        </button>
        <button
          onClick={calculateAffordability}
          disabled={isCalculating}
          className="flex-1 bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isCalculating ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Calculating...
            </>
          ) : (
            <>
              <Calculator className="w-5 h-5" />
              Calculate Affordability
            </>
          )}
        </button>
      </div>
    </div>
  );

  const renderStep4 = () => {
    if (!result) return null;

    const getHealthColor = (score: number) => {
      if (score >= 80) return 'text-green-600';
      if (score >= 60) return 'text-yellow-600';
      return 'text-red-600';
    };

    const getHealthLabel = (score: number) => {
      if (score >= 80) return 'Excellent';
      if (score >= 60) return 'Good';
      if (score >= 40) return 'Fair';
      return 'Needs Improvement';
    };

    return (
      <div className="space-y-6">
        <div className="text-center">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${
            result.financialHealthScore >= 80 ? 'bg-green-100' :
            result.financialHealthScore >= 60 ? 'bg-yellow-100' : 'bg-red-100'
          }`}>
            <span className={`text-3xl font-bold ${getHealthColor(result.financialHealthScore)}`}>
              {result.financialHealthScore}
            </span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Financial Health</h2>
          <p className={`text-lg font-medium ${getHealthColor(result.financialHealthScore)}`}>
            {getHealthLabel(result.financialHealthScore)}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6 border border-red-200">
            <div className="text-sm text-red-700 font-medium mb-1">Maximum Monthly Payment</div>
            <div className="text-3xl font-bold text-red-900">${result.maxMonthlyPayment}</div>
            <div className="text-xs text-red-600 mt-1">Absolute maximum you can afford</div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200">
            <div className="text-sm text-green-700 font-medium mb-1">Recommended Payment</div>
            <div className="text-3xl font-bold text-green-900">${result.recommendedPayment}</div>
            <div className="text-xs text-green-600 mt-1">Comfortable range for your budget</div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="font-bold text-gray-900 mb-4">Financial Breakdown</h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Monthly Income</span>
              <span className="font-medium text-gray-900">${financialData.monthlyIncome.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Total Expenses</span>
              <span className="font-medium text-gray-900">${result.totalExpenses.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Savings Goal ({financialData.savingsGoalPercentage}%)</span>
              <span className="font-medium text-gray-900">
                ${Math.round(financialData.monthlyIncome * (financialData.savingsGoalPercentage / 100)).toLocaleString()}
              </span>
            </div>
            <div className="pt-3 border-t border-gray-200">
              <div className="flex justify-between text-sm font-bold">
                <span className="text-gray-900">Disposable Income</span>
                <span className="text-green-600">${result.disposableIncome.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        {result.warnings.length > 0 && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-red-900 mb-2">Important Considerations</h4>
                <ul className="space-y-1">
                  {result.warnings.map((warning, index) => (
                    <li key={index} className="text-sm text-red-700">• {warning}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {result.recommendations.length > 0 && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-green-900 mb-2">AI Recommendations</h4>
                <ul className="space-y-1">
                  {result.recommendations.map((rec, index) => (
                    <li key={index} className="text-sm text-green-700">• {rec}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-6 text-white">
          <h3 className="font-bold text-lg mb-2">Ready to Find Your Toyota?</h3>
          <p className="text-red-100 text-sm mb-4">
            Based on your finances, we recommend looking at vehicles between ${result.recommendedPayment} - ${result.maxMonthlyPayment} per month.
          </p>
          <button
            onClick={() => window.location.href = '/?maxPayment=' + result.maxMonthlyPayment}
            className="w-full bg-white text-red-600 py-3 rounded-lg font-medium hover:bg-red-50 transition-colors"
          >
            Browse Vehicles in Your Budget
          </button>
        </div>

        <button
          onClick={resetCalculator}
          className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
        >
          Start Over
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-4">
            <Calculator className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Toyota Affordability Calculator</h1>
          <p className="text-gray-600">AI-powered financial analysis to find your perfect monthly payment</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          {step < 4 && renderProgressBar()}
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
          {step === 4 && renderStep4()}
        </div>

        <div className="text-center mt-6 text-sm text-gray-500">
          <p>Your financial information is private and secure. We never share your data.</p>
        </div>
      </div>
    </div>
  );
}
