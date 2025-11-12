import { Bot, User } from 'lucide-react';

interface MessageBubbleProps {
  message: string;
  isBot: boolean;
}

export default function MessageBubble({ message, isBot }: MessageBubbleProps) {
  return (
    <div className={`flex gap-3 ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
      {isBot && (
        <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
          <Bot className="w-5 h-5 text-white" />
        </div>
      )}
      <div
        className={`max-w-xl px-4 py-3 rounded-2xl shadow-sm ${
          isBot
            ? 'bg-white text-gray-800 rounded-tl-none'
            : 'bg-red-600 text-white rounded-tr-none'
        }`}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message}</p>
      </div>
      {!isBot && (
        <div className="flex-shrink-0 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
          <User className="w-5 h-5 text-gray-700" />
        </div>
      )}
    </div>
  );
}
