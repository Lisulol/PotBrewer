"use client";
import { useEffect, useState, JSX, use,  } from "react";
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
  const [isAnimating, setAnimating] = useState(false);
  const [isShown, setShowing] = useState(false);
  const [potionComponent, setPotionComponent] = useState<JSX.Element | null>(null);




  function handleBrew(){
    setTimeout(()=>{
      if(selectedIngredients.length === 2){
        
          const potion =getPotionComponent()
          setPotionComponent(potion)
      }
    },4000)

  }
  useEffect(() =>{
    handleBrew()
    setAnimating(true)
  },[selectedIngredients])
  useEffect(()=> {
    if(isAnimating == true){
      setShowing(true)
    }
},[isAnimating])



  function ShowAnimation(){
    if(isAnimating && selectedIngredients.length == 2){
      return(
        <>
        <Image src='./assets/potion-icon-png-15.png' alt='Left Bottle'/>
        <Image src='./assets/potion-icon-png-15.png' alt='Right Bottle'/>
        </>
      )
    }
  }

  const ShowBrew = () =>{
    if( selectedIngredients.length == 2){
      return (
           <div className="mt-8">
            <p className="text-muted-foreground animate-pulse">Adding ingredients...</p>
          </div>
      )
    }
    else{
      return(
          <Link href="/Ingredients" className="cursor-pointer">
            <Button className='h-14 w-58'variant="outline">Ingredients</Button>
          </Link>
      )
    }
    

  }

  const getPotionComponent = (): JSX.Element | null => {
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
    <div className="h-screen w-full flex items-center justify-center relative">
      <div className="flex flex-col items-center justify-center space-y-8 relative z-10">
        <div className="relative">
          <Pot />
        </div>
        {ShowBrew()}
        {potionComponent}
        
        
      </div>
    </div>
  );
}