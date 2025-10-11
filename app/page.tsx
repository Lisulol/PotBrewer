"use client";
import { useEffect, useState, useRef, JSX } from "react";
import { motion } from "framer-motion";
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
      setShowPotion(true);
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
    }, 6000);
  };

  const leftVariants = {
    initial: { rotate: 0, x: -50, y: 0 },
    animate: {
      rotate: -100,
      x: -10,
      y: -20,
      transition: { duration: 4, ease: "easeInOut" as const },
    },
  };

  const rightVariants = {
    initial: { rotate: 0, x: 50, y: 0 },
    animate: {
      rotate: 100,
      x: 10,
      y: -20,
      transition: { duration: 4, ease: "easeInOut" as const },
    },
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
    <div className="h-screen w-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-8">
        <Pot />
        {selectedIngredients.length === 0 && (
          <Link href="/Ingredients" className="cursor-pointer">
            <Button variant="outline">Ingredients</Button>
          </Link>
        )}

        {selectedIngredients.length === 2 && !showPotion && (
          <>
            <div className="flex items-center justify-center space-x-10">
              {isAnimating && (
                <motion.div variants={leftVariants} initial="initial" animate="animate">
                  <Image src="/images/bottle.png" alt="Bottle left" width={100} height={150} />
                </motion.div>
              )}

         
              {isAnimating && (
                <motion.div variants={rightVariants} initial="initial" animate="animate">
                  <Image src="/images/bottle.png" alt="Bottle right" width={100} height={150} />
                </motion.div>
              )}
            </div>

            {!isAnimating && (
              <Button variant="outline" onClick={startBrewing}>
                Brew Potion
              </Button>
            )}
          </>
        )}

        {selectedIngredients.length === 2 && showPotion && (
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
    </div>
  );
}
