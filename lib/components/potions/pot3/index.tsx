import { Item, ItemContent, ItemDescription, ItemHeader, ItemMedia } from "@/components/ui/item";

export default function Potion3 (){
    return(
        <div className="fixed top-0 left-0 w-screen h-screen z-[9999] flex items-center justify-center bg-white">
            <div className="text-black text-4xl font-bold animate-pulse">
            <Item variant="outline">
                <ItemContent>
                   <ItemHeader className="flex items-center justify-center">
                        Bocian Vape Bomb
                    </ItemHeader>
                    <div className="flex items-center justify-center flex-col">
                    <ItemMedia>
                        <img src="/assets/potion-icon-png-15.png" alt="Potion Icon" />
                    </ItemMedia>
                    <ItemDescription className="max-w-3xs text-center mt-2">Creates a vape cloud so thick it opens a portal to another timeline.</ItemDescription>
                    </div>
                </ItemContent>
            </Item>
        </div>
        </div>
    )





}