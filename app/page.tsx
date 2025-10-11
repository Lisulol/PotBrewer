"use client";
import { useEffect, useState, useRef, JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useIngredients } from "@/lib/providers/PotionContext";
import Potion1 from "@/lib/components/potions/pot1";
import Potion2 from "@/lib/components/potions/pot2";
import Potion3 from "@/lib/components/potions/pot3";
import Potion4 from "@/lib/components/potions/pot4";
import Potion5 from "@/lib/components/potions/pot5";
import Potion6 from "@/lib/components/potions/pot6";
import Potion7 from "@/lib/components/potions/pot7";
import Potion8 from "@/lib/components/potions/pot8";
import Potion9 from "@/lib/components/potions/pot9";
import Potion10 from "@/lib/components/potions/pot10";
import Pot from "@/lib/components/Pot";

export default function Main() {
  const { selectedIngredients } = useIngredients();
  const [isAnimating, setIsAnimating] = useState(false);
  const [showPotion, setShowPotion] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (selectedIngredients.length === 2) {
      // Don't automatically show potion, wait for user to brew
      setShowPotion(false);
    } else {
      setShowPotion(false);
    }
  }, [selectedIngredients]);

  const startBrewing = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setShowPotion(false);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = window.setTimeout(() => {
      setIsAnimating(false);
      setShowPotion(true);
      timeoutRef.current = null;
    }, 3500);
  };

  const getPotionComponent = (): JSX.Element | null => {
    if (selectedIngredients.length !== 2) return null;
    const [a, b] = selectedIngredients;
    const match = (x: string, y: string) => (a === x && b === y) || (a === y && b === x);
    if (match("Femboy extract", "Rabbits foot")) return <Potion1 />;
    if (match("Femboy extract", "Freinds vape")) return <Potion2 />;
    if (match("Rabbits foot", "Freinds vape")) return <Potion3 />;
    if (match("School Server", "Femboy extract")) return <Potion4 />;
    if (match("Rabbits foot", "School Server")) return <Potion5 />;
    if (match("Bocian", "School Server")) return <Potion6 />;
    if (match("Bocian", "Freinds vape")) return <Potion7 />;
    if (match("Rabbits foot", "Bocian")) return <Potion8 />;
    if (match("School Server", "Freinds vape")) return <Potion9 />;
    if (match("Bocian", "Femboy extract")) return <Potion10 />;
    return null;
  };

  return (
    <div className="h-screen w-full flex items-center justify-center relative overflow-hidden">
      <div className="flex flex-col items-center justify-center space-y-8 relative z-10">
        <div className="relative">
          <Pot />
        </div>

        {selectedIngredients.length === 0 && (
          <Link href="/Ingredients" className="cursor-pointer">
            <Button variant="outline">Ingredients</Button>
          </Link>
        )}

        {selectedIngredients.length === 2 && !showPotion && !isAnimating && (
          <Button variant="outline" onClick={startBrewing}>
            Brew Potion
          </Button>
        )}

        {selectedIngredients.length === 2 && isAnimating && (
          <div className="mt-8">
            <p className="text-muted-foreground animate-pulse">Adding ingredients...</p>
          </div>
        )}

        {selectedIngredients.length === 2 && showPotion && !isAnimating && (
          <div className="relative flex items-center justify-center w-40 h-40">
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {getPotionComponent()}
            </motion.div>
          </div>
        )}
      </div>

      {/* Bottle animations - full screen overlay */}
      {isAnimating && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <div className="relative w-full h-full">
            <motion.div
              initial={{ x: -200, y: "30vh", rotate: 0, opacity: 1 }}
              animate={{ x: "50vw", y: "40vh", rotate: -360, opacity: 0 }}
              transition={{ 
                duration: 2.5, 
                ease: "easeInOut",
                opacity: { delay: 2, duration: 0.5 }
              }}
              className="absolute"
              style={{ transformOrigin: "center" }}
            >
              <Image src="/assets/potion-icon-png-15.png" alt="Bottle left animated" width={80} height={120} />
            </motion.div>

            <motion.div
              initial={{ x: "100vw", y: "30vh", rotate: 0, opacity: 1 }}
              animate={{ x: "50vw", y: "40vh", rotate: 360, opacity: 0 }}
              transition={{ 
                duration: 2.5, 
                ease: "easeInOut",
                opacity: { delay: 2, duration: 0.5 }
              }}
              className="absolute"
              style={{ transformOrigin: "center" }}
            >
              <Image src="/assets/potion-icon-png-15.png" alt="Bottle right animated" width={80} height={120} />
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}