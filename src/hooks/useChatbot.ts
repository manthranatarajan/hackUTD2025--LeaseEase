import { useState, useCallback } from 'react';
import { getCars, CarFilters } from '../lib/carsApi';
import { getToyotaFallback } from '../lib/getToyotaFallback';
import { Car } from '../lib/supabase';
import { speak } from '../speech';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
}

interface ChatbotState {
  messages: Message[];
  recommendedCars: Car[];
  isLoading: boolean;
  currentFilters: CarFilters;
  excludedCarIds: string[];
}

export function useChatbot() {
  const [state, setState] = useState<ChatbotState>({
    messages: [
      {
        id: '1',
        text: "Hi! I'm your Toyota LeaseEase assistant. Tell me about your lifestyle and needs, or let me know your ideal monthly payment range. I can help you find the perfect Toyota!",
        isBot: true,
      },
    ],
    recommendedCars: [],
    isLoading: false,
    currentFilters: {},
    excludedCarIds: [],
  });

  const addMessage = useCallback((text: string, isBot: boolean) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot,
    };

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, newMessage],
    }));

    if (isBot) {
      speak(text);
    }

    return newMessage;
  }, []);

  const parseUserInput = useCallback((input: string): Partial<CarFilters> & { customResponse?: string } => {
    const filters: Partial<CarFilters> & { customResponse?: string } = {};
    const lowerInput = input.toLowerCase();

    // Lifestyle-based recommendations
    if (lowerInput.includes('family') || lowerInput.includes('kids') || lowerInput.includes('children') ||
        lowerInput.includes('soccer') || lowerInput.includes('school')) {
      filters.category = 'suv';
      filters.customResponse = "Great! For families with kids, I recommend spacious SUVs and minivans with plenty of room for car seats, sports equipment, and comfortable seating. Let me show you the best Toyota family vehicles.";
      if (lowerInput.includes('mom') || lowerInput.includes('parent')) {
        filters.customResponse = "Perfect! As a parent, you'll love the Toyota Highlander or Sienna. They offer 3-row seating, excellent safety features, and plenty of cargo space for soccer gear and everything else kids need. Let me show you some options!";
      }
    } else if (lowerInput.includes('commute') || lowerInput.includes('commuting') || lowerInput.includes('work') ||
               lowerInput.includes('fuel efficient') || lowerInput.includes('gas saver')) {
      filters.fuelType = 'hybrid';
      filters.customResponse = "For commuting, I recommend our fuel-efficient hybrids! Toyota's hybrid technology will save you money at the pump. Let me show you our best options for daily driving.";
    } else if (lowerInput.includes('adventure') || lowerInput.includes('camping') || lowerInput.includes('outdoors') ||
               lowerInput.includes('hiking') || lowerInput.includes('off-road') || lowerInput.includes('trail')) {
      filters.category = 'suv';
      filters.customResponse = "Adventure awaits! Toyota's rugged SUVs like the 4Runner and RAV4 are built for outdoor adventures. They offer excellent off-road capability, cargo space for gear, and legendary reliability. Let me show you our adventure-ready vehicles!";
    } else if (lowerInput.includes('weekend trips') || lowerInput.includes('road trip')) {
      filters.category = 'suv';
      filters.customResponse = "For weekend getaways, you'll want something comfortable and spacious. Our SUVs offer great cargo room, comfortable seating, and excellent fuel economy for long drives. Let me show you the perfect road trip vehicles!";
    } else if (lowerInput.includes('haul') || lowerInput.includes('tow') || lowerInput.includes('construction') ||
               lowerInput.includes('contractor') || lowerInput.includes('truck bed')) {
      filters.category = 'truck';
      filters.customResponse = "For hauling and towing, nothing beats a Toyota truck! The Tacoma and Tundra are legendary for their capability and reliability. Let me show you trucks that can handle any job.";
    } else if (lowerInput.includes('fun') || lowerInput.includes('sporty') || lowerInput.includes('performance') ||
               lowerInput.includes('fast')) {
      filters.category = 'sports';
      filters.customResponse = "Looking for something fun? The GR86 and GR Supra deliver pure driving excitement with Toyota reliability. Let me show you our performance lineup!";
    } else if (lowerInput.includes('first car') || lowerInput.includes('college') || lowerInput.includes('student')) {
      filters.category = 'sedan';
      filters.maxPayment = 400;
      filters.customResponse = "Perfect choice for a first car! The Toyota Corolla is ideal for students and new drivers - reliable, affordable, and efficient. Let me show you some great options under $400/month.";
    } else if (lowerInput.includes('luxury') || lowerInput.includes('premium') || lowerInput.includes('upscale')) {
      filters.customResponse = "Looking for luxury? Check out the Crown, Avalon, and top-trim Highlander. These offer premium features, leather interiors, and refined comfort. Let me show you Toyota's luxury lineup!";
    } else if (lowerInput.includes('environment') || lowerInput.includes('eco') || lowerInput.includes('green') ||
               lowerInput.includes('planet')) {
      filters.fuelType = 'hybrid';
      filters.customResponse = "Great to see you care about the environment! Toyota's hybrids and the all-electric bZ4X are perfect eco-friendly choices. Let me show you our greenest vehicles!";
    }

    // Price parsing
    const paymentMatch = input.match(/\$?(\d+)\s*(?:to|-)\s*\$?(\d+)/);
    if (paymentMatch) {
      filters.minPayment = parseInt(paymentMatch[1]);
      filters.maxPayment = parseInt(paymentMatch[2]);
    } else {
      const singlePaymentMatch = input.match(/\$?(\d+)/);
      if (singlePaymentMatch) {
        const amount = parseInt(singlePaymentMatch[1]);
        filters.maxPayment = amount;
      }
    }

    // Category detection
    if (lowerInput.includes('suv') || lowerInput.includes('crossover')) {
      filters.category = 'suv';
    } else if (lowerInput.includes('sedan')) {
      filters.category = 'sedan';
    } else if (lowerInput.includes('truck')) {
      filters.category = 'truck';
    } else if (lowerInput.includes('van') || lowerInput.includes('minivan')) {
      filters.category = 'van';
    } else if (lowerInput.includes('sports') || lowerInput.includes('coupe')) {
      filters.category = 'sports';
    }

    // Fuel type detection
    if (lowerInput.includes('electric') || lowerInput.includes('ev')) {
      filters.fuelType = 'electric';
    } else if (lowerInput.includes('hybrid')) {
      filters.fuelType = 'hybrid';
    } else if (lowerInput.includes('gas') && !lowerInput.includes('gas saver')) {
      filters.fuelType = 'gas';
    }

    // Color detection
    if (lowerInput.includes('black')) {
      filters.color = 'black';
    } else if (lowerInput.includes('white')) {
      filters.color = 'white';
    } else if (lowerInput.includes('silver')) {
      filters.color = 'silver';
    } else if (lowerInput.includes('red')) {
      filters.color = 'red';
    } else if (lowerInput.includes('blue')) {
      filters.color = 'blue';
    } else if (lowerInput.includes('gray') || lowerInput.includes('grey')) {
      filters.color = 'gray';
    }

    // Model-specific requests
    if (lowerInput.includes('corolla')) {
      filters.model = 'Corolla';
    } else if (lowerInput.includes('camry')) {
      filters.model = 'Camry';
    } else if (lowerInput.includes('rav4')) {
      filters.model = 'RAV4';
    } else if (lowerInput.includes('highlander')) {
      filters.model = 'Highlander';
    } else if (lowerInput.includes('4runner')) {
      filters.model = '4Runner';
    } else if (lowerInput.includes('tacoma')) {
      filters.model = 'Tacoma';
    } else if (lowerInput.includes('tundra')) {
      filters.model = 'Tundra';
    } else if (lowerInput.includes('sienna')) {
      filters.model = 'Sienna';
    } else if (lowerInput.includes('prius')) {
      filters.model = 'Prius';
    }

    return filters;
  }, []);

  const fetchRecommendations = useCallback(
    async (filters: CarFilters, skipMessage = false) => {
      setState((prev) => ({ ...prev, isLoading: true }));

      try {
        let cars = await getCars({
          ...filters,
          excludeIds: state.excludedCarIds,
        });

        if (cars.length < 3 && filters.minPayment !== undefined && filters.maxPayment !== undefined) {
          const fallbackCars = await getToyotaFallback(
            filters.minPayment,
            filters.maxPayment
          );
          cars = [...cars, ...fallbackCars].slice(0, 6);
        }

        setState((prev) => ({
          ...prev,
          recommendedCars: cars,
          isLoading: false,
          currentFilters: filters,
        }));

        if (!skipMessage) {
          const responseText = cars.length > 0
            ? `I found ${cars.length} great options for you! Take a look at these vehicles. What do you think about these options?`
            : "I couldn't find vehicles matching your exact criteria. Would you like to adjust your budget or preferences?";

          addMessage(responseText, true);
        }
      } catch (error) {
        console.error('Error fetching recommendations:', error);
        setState((prev) => ({ ...prev, isLoading: false }));
        addMessage(
          "I'm having trouble finding vehicles right now. Please try again.",
          true
        );
      }
    },
    [addMessage, state.excludedCarIds]
  );

  const handleUserMessage = useCallback(
    async (text: string) => {
      addMessage(text, false);

      const lowerText = text.toLowerCase();

      if (lowerText.includes('remove') || lowerText.includes('not this one')) {
        const optionMatch = text.match(/option\s+(\d+)|(\d+)/);
        if (optionMatch && state.recommendedCars.length > 0) {
          const optionIndex = parseInt(optionMatch[1] || optionMatch[2]) - 1;
          if (optionIndex >= 0 && optionIndex < state.recommendedCars.length) {
            const removedCar = state.recommendedCars[optionIndex];
            setState((prev) => ({
              ...prev,
              excludedCarIds: [...prev.excludedCarIds, removedCar.id],
            }));
            addMessage(
              `I've removed the ${removedCar.year} ${removedCar.make} ${removedCar.model}. Let me find you some other options.`,
              true
            );
            await fetchRecommendations(state.currentFilters);
          }
        }
        return;
      }

      if (
        lowerText.includes('cheaper') ||
        lowerText.includes('lower') ||
        lowerText.includes('less expensive')
      ) {
        const newMaxPayment = state.currentFilters.maxPayment
          ? state.currentFilters.maxPayment - 50
          : 400;
        const updatedFilters = {
          ...state.currentFilters,
          maxPayment: newMaxPayment,
        };
        addMessage(
          `Let me show you more affordable options under $${newMaxPayment}/month.`,
          true
        );
        await fetchRecommendations(updatedFilters);
        return;
      }

      if (lowerText.includes("don't like") || lowerText.includes('no ')) {
        const filters = parseUserInput(text);
        const updatedFilters = { ...state.currentFilters, ...filters };
        addMessage(
          'Got it! Let me find you some different options based on your preferences.',
          true
        );
        await fetchRecommendations(updatedFilters);
        return;
      }

      const parsedInput = parseUserInput(text);
      const { customResponse, ...newFilters } = parsedInput;

      if (Object.keys(newFilters).length > 0) {
        if (customResponse) {
          addMessage(customResponse, true);
        }
        const mergedFilters = { ...state.currentFilters, ...newFilters };
        await fetchRecommendations(mergedFilters as CarFilters, !!customResponse);
      } else if (state.recommendedCars.length === 0) {
        addMessage(
          "I'd be happy to help you find the perfect vehicle! Could you tell me your budget range? For example, '$300 to $500 per month'",
          true
        );
      } else {
        addMessage(
          'I can help you refine your search. You can ask me to show cheaper options, remove specific vehicles, or change your preferences.',
          true
        );
      }
    },
    [addMessage, fetchRecommendations, parseUserInput, state]
  );

  const removeCarFromResults = useCallback(
    async (carId: string) => {
      setState((prev) => ({
        ...prev,
        excludedCarIds: [...prev.excludedCarIds, carId],
      }));

      const removedCar = state.recommendedCars.find((car) => car.id === carId);
      if (removedCar) {
        addMessage(
          `I've removed the ${removedCar.year} ${removedCar.make} ${removedCar.model}. Here are some other options:`,
          true
        );
      }

      await fetchRecommendations(state.currentFilters);
    },
    [addMessage, fetchRecommendations, state.currentFilters, state.recommendedCars]
  );

  return {
    messages: state.messages,
    recommendedCars: state.recommendedCars,
    isLoading: state.isLoading,
    handleUserMessage,
    removeCarFromResults,
  };
}
