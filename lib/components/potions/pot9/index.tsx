import { Button } from "@/components/ui/button";
import { Item, ItemContent, ItemDescription, ItemHeader, ItemMedia } from "@/components/ui/item";
import { useIngredients } from "@/lib/providers/PotionContext";
import Link from "next/link";

interface PotionProps {
    onClose: () => void
}

export default function Potion9 ({ onClose }: PotionProps){

    return(
       <div className="fixed top-0 left-0 w-screen h-screen z-[9999] flex items-center justify-center bg-white flex-col gap-9">
            <div className="text-black text-4xl font-bold animate-pulse">
            <Item variant="outline">
                <ItemContent>
                    <ItemHeader className="flex items-center justify-center ">
                        The Vape Prophet
                    </ItemHeader>
                    <div className="flex items-center justify-center flex-col">
                    <ItemMedia>
                        <img src="/assets/potion-icon-png-15.png" alt="Potion Icon" />
                    </ItemMedia>
                    <ItemDescription className="max-w-3xs text-center mt-2">You start speaking in vape clouds that foretell disappointing futures.</ItemDescription>
                    </div>
                </ItemContent>
            </Item>
        </div>
        


        <div className = ' relative flex items-center justify-center text-black z-10'>
            
            <Button className='cursor-pointer'onClick={onClose}variant="outline">Return</Button>
          
        </div>





        </div>
    )





}