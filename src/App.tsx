import { useState } from 'react';
import ChatHeader from './components/ChatHeader';
import ChatMessages from './components/ChatMessages';
import ChatInput from './components/ChatInput';
import QuestionCard from './components/QuestionCard';
import CarsGrid from './components/CarsGrid';
import FinanceCalculator from './components/FinanceCalculator';
import CompareModal from './components/CompareModal';
import DealershipLocator from './components/DealershipLocator';
import Car3DViewer from './components/Car3DViewer';
import { useChatbot } from './hooks/useChatbot';
import { startListening } from './speech';
import { MessageCircle, Calculator } from 'lucide-react';
import { Car } from './lib/supabase';

function App() {
  const {
    messages,
    recommendedCars,
    isLoading,
    handleUserMessage,
    removeCarFromResults,
  } = useChatbot();

  const [isListening, setIsListening] = useState(false);
  const [activeTab, setActiveTab] = useState<'chat' | 'finance'>('chat');
  const [selectedForCompare, setSelectedForCompare] = useState<string[]>([]);
  const [showCompareModal, setShowCompareModal] = useState(false);
  const [selectedCarForDealership, setSelectedCarForDealership] = useState<Car | null>(null);
  const [selectedCarFor3D, setSelectedCarFor3D] = useState<Car | null>(null);

  const suggestedQuestions = [
    "I'm looking for something under $400 per month",
    "Show me hybrid SUVs",
    "What sedans do you have for under $350/month?",
    "I need a truck for work",
  ];

  const handleVoiceInput = () => {
    setIsListening(true);
    const stopListening = startListening((transcript) => {
      setIsListening(false);
      handleUserMessage(transcript);
    });

    setTimeout(() => {
      stopListening();
      setIsListening(false);
    }, 5000);
  };

  const handleCompareClick = (carId: string) => {
    setSelectedForCompare((prev) => {
      if (prev.includes(carId)) {
        return prev.filter((id) => id !== carId);
      }
      if (prev.length < 2) {
        const newSelection = [...prev, carId];
        if (newSelection.length === 2) {
          setShowCompareModal(true);
        }
        return newSelection;
      }
      return prev;
    });
  };

  const handleCloseCompare = () => {
    setShowCompareModal(false);
    setSelectedForCompare([]);
  };

  const compareModalCars = selectedForCompare.length === 2
    ? recommendedCars.filter((car) => selectedForCompare.includes(car.id))
    : [];

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <ChatHeader />

      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1">
            <button
              onClick={() => setActiveTab('chat')}
              className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors relative ${
                activeTab === 'chat'
                  ? 'text-red-600 border-b-2 border-red-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <MessageCircle className="w-5 h-5" />
              Find Your Toyota
            </button>
            <button
              onClick={() => setActiveTab('finance')}
              className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors relative ${
                activeTab === 'finance'
                  ? 'text-red-600 border-b-2 border-red-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Calculator className="w-5 h-5" />
              Check My Budget
            </button>
          </div>
        </div>
      </div>

      {activeTab === 'chat' ? (
        <>
          <div className="flex-1 overflow-y-auto">
            <div className="max-w-7xl mx-auto">
              <ChatMessages messages={messages} />

              {messages.length === 1 && (
                <div className="p-6 bg-gray-50">
                  <div className="max-w-5xl mx-auto">
                    <p className="text-sm text-gray-600 mb-3">Quick suggestions:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {suggestedQuestions.map((question, index) => (
                        <QuestionCard
                          key={index}
                          question={question}
                          onClick={() => handleUserMessage(question)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {recommendedCars.length > 0 && (
                <div className="bg-white border-t border-gray-200 pb-6">
                  <div className="max-w-7xl mx-auto">
                    <div className="p-6 border-b border-gray-200">
                      <h2 className="text-xl font-bold text-gray-900">
                        Recommended Vehicles
                      </h2>
                      <p className="text-sm text-gray-600 mt-1">
                        Found {recommendedCars.length} vehicles matching your criteria
                      </p>
                    </div>
                    <CarsGrid
                      cars={recommendedCars}
                      onRemove={removeCarFromResults}
                      onCompare={handleCompareClick}
                      selectedForCompare={selectedForCompare}
                      onFindDealership={(car) => setSelectedCarForDealership(car)}
                      onView3D={(car) => setSelectedCarFor3D(car)}
                    />
                  </div>
                </div>
              )}

              {isLoading && (
                <div className="p-6 text-center">
                  <div className="inline-block w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-sm text-gray-600 mt-2">Finding vehicles...</p>
                </div>
              )}
            </div>
          </div>

          <ChatInput
            onSend={handleUserMessage}
            onVoiceStart={handleVoiceInput}
            isListening={isListening}
            disabled={isLoading}
          />
        </>
      ) : (
        <div className="flex-1 overflow-y-auto">
          <FinanceCalculator />
        </div>
      )}

      {showCompareModal && compareModalCars.length === 2 && (
        <CompareModal
          cars={compareModalCars as [Car, Car]}
          onClose={handleCloseCompare}
        />
      )}

      {selectedCarForDealership && (
        <DealershipLocator
          car={selectedCarForDealership}
          onClose={() => setSelectedCarForDealership(null)}
        />
      )}

      {selectedCarFor3D && (
        <Car3DViewer
          car={selectedCarFor3D}
          onClose={() => setSelectedCarFor3D(null)}
        />
      )}
    </div>
  );
}

export default App;
