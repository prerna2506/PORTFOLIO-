"use client";

import { useState, useCallback, memo } from "react";
import { motion } from "framer-motion";
import { Code, Cpu, Database, Globe, Layers, Smartphone, Trophy, RotateCcw } from "lucide-react";

const ICON_TYPES = [Code, Cpu, Database, Globe, Layers, Smartphone];
const ICON_COLORS = ["text-blue-400", "text-purple-400", "text-emerald-400", "text-cyan-400", "text-orange-400", "text-pink-400"];

interface Card {
  id: number;
  iconIndex: number;
  isFlipped: boolean;
  isMatched: boolean;
}

// Icon renderer - lazy load icons
const IconRenderer = memo(({ iconIndex }: { iconIndex: number }) => {
  const Icon = ICON_TYPES[iconIndex];
  return <Icon size={24} className={ICON_COLORS[iconIndex]} />;
});
IconRenderer.displayName = "IconRenderer";

// Card component - memoized to prevent unnecessary re-renders
const CardComponent = memo(({ card, index, onClick }: { card: Card; index: number; onClick: () => void }) => (
  <motion.div
    className="relative cursor-pointer w-full aspect-square"
    style={{ perspective: "1000px" }}
    onClick={onClick}
    whileHover={{ scale: card.isFlipped || card.isMatched ? 1 : 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <motion.div
      className="w-full h-full absolute top-0 left-0 transition-all duration-500"
      style={{ transformStyle: "preserve-3d" }}
      initial={false}
      animate={{ rotateY: card.isFlipped || card.isMatched ? 180 : 0 }}
    >
      {/* Front of card */}
      <div
        className="absolute inset-0 bg-neutral-800/50 border border-white/10 rounded-lg flex items-center justify-center hover:bg-neutral-800/80 transition-colors"
        style={{ backfaceVisibility: "hidden" }}
      >
        <div className="w-5 h-5 rounded-full bg-white/5" />
      </div>

      {/* Back of card (the icon) */}
      <div
        className="absolute inset-0 bg-[#1a1a1a] border border-orange-500/30 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.1)]"
        style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
      >
        <IconRenderer iconIndex={card.iconIndex} />
      </div>
    </motion.div>
  </motion.div>
));
CardComponent.displayName = "CardComponent";

export default function InteractiveDemo() {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [isWon, setIsWon] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Initialize Game
  const initializeGame = useCallback(() => {
    const duplicatedIndices = Array.from({ length: ICON_TYPES.length * 2 }, (_, i) => i % ICON_TYPES.length);
    const shuffledCards = duplicatedIndices
      .map((iconIndex, index) => ({
        id: index,
        iconIndex,
        isFlipped: false,
        isMatched: false,
      }))
      .sort(() => Math.random() - 0.5);

    setCards(shuffledCards);
    setFlippedIndices([]);
    setMoves(0);
    setIsWon(false);
    setIsPlaying(true);
  }, []);

  // Handle Card Click
  const handleCardClick = useCallback((index: number) => {
    setCards(prev => {
      if (flippedIndices.length === 2) return prev;
      if (prev[index].isFlipped || prev[index].isMatched) return prev;

      const newFlippedIndices = [...flippedIndices, index];
      const newCards = [...prev];
      newCards[index].isFlipped = true;

      if (newFlippedIndices.length === 2) {
        setMoves(m => m + 1);
        checkForMatch(newFlippedIndices, newCards);
      }
      
      setFlippedIndices(newFlippedIndices);
      return newCards;
    });
  }, [flippedIndices]);

  // Check for Match
  const checkForMatch = (indices: number[], currentCards: Card[]) => {
    const [firstIndex, secondIndex] = indices;

    if (currentCards[firstIndex].iconIndex === currentCards[secondIndex].iconIndex) {
      setTimeout(() => {
        setCards(prev => {
          const newCards = [...prev];
          newCards[firstIndex].isMatched = true;
          newCards[secondIndex].isMatched = true;
          
          if (newCards.every((card) => card.isMatched)) {
            setIsWon(true);
          }
          
          return newCards;
        });
        setFlippedIndices([]);
      }, 500);
    } else {
      setTimeout(() => {
        setCards(prev => {
          const newCards = [...prev];
          newCards[firstIndex].isFlipped = false;
          newCards[secondIndex].isFlipped = false;
          return newCards;
        });
        setFlippedIndices([]);
      }, 1000);
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      {!isPlaying ? (
        <div className="flex flex-col items-center justify-center flex-1">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center mb-3 shadow-[0_0_40px_rgba(249,115,22,0.3)]">
            <Layers size={32} className="text-white" />
          </div>
          <h3 className="text-lg font-bold text-white mb-3">Test your memory?</h3>
          <button
            onClick={initializeGame}
            className="px-6 py-2 bg-white text-black hover:bg-neutral-200 font-semibold rounded-full transition-all hover:scale-105 text-sm"
          >
            Start
          </button>
        </div>
      ) : (
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center px-2 py-1 flex-shrink-0">
            <div className="text-neutral-300 font-mono text-sm">
              Moves: <span className="text-orange-400 font-bold">{moves}</span>
            </div>
            <button
              onClick={initializeGame}
              className="flex items-center gap-1 text-xs text-neutral-400 hover:text-white transition-colors"
            >
              <RotateCcw size={14} />
              Restart
            </button>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 gap-2 flex-1 p-2 auto-rows-fr overflow-hidden">
            {cards.map((card, index) => (
              <CardComponent 
                key={card.id}
                card={card}
                index={index}
                onClick={() => handleCardClick(index)}
              />
            ))}
          </div>

          {isWon && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm"
            >
              <Trophy size={40} className="text-yellow-400 mb-2" />
              <h3 className="text-2xl font-bold text-white">Won!</h3>
              <p className="text-xs text-neutral-300 font-mono mb-4">{moves} moves</p>
              <button
                onClick={initializeGame}
                className="px-5 py-1 bg-orange-500 text-white hover:bg-orange-600 font-bold rounded-full text-xs transition-all hover:scale-105"
              >
                Play Again
              </button>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
}
