interface QuestionCardProps {
  question: string;
  onClick: () => void;
}

export default function QuestionCard({ question, onClick }: QuestionCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left p-4 bg-white rounded-xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-200 border border-gray-100"
    >
      <p className="text-sm text-gray-700">{question}</p>
    </button>
  );
}
