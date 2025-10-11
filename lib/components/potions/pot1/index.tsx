import { Item, ItemContent, ItemDescription, ItemHeader, ItemMedia } from "@/components/ui/item";

export default function Potion1 (){
    return(
        <div className="fixed top-0 left-0 w-screen h-screen z-[9999] flex items-center justify-center bg-white">
            <div className="text-black text-4xl font-bold animate-pulse">

            <Item variant="outline">
                <ItemContent>
                    <ItemHeader className="flex items-center justify-center">
                        Gay Potion
                    </ItemHeader>
                    <div className="flex items-center justify-center flex-col">

                    <ItemMedia>
                        <img src="/assets/potion-icon-png-15.png" alt="Potion Icon" />
                    </ItemMedia>
                    <ItemDescription>I think there is nothing to explain here</ItemDescription>
                    </div>

                </ItemContent>
            </Item>
            </div>
        </div>
    )





}