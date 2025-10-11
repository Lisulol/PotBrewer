import { Item, ItemContent, ItemDescription, ItemHeader, ItemMedia } from "@/components/ui/item";

export default function Potion9 (){
    return(
       <div className="fixed top-0 left-0 w-screen h-screen z-[9999] flex items-center justify-center bg-white">
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
                    <ItemDescription>You start speaking in vape clouds that foretell disappointing futures.</ItemDescription>
                    </div>
                </ItemContent>
            </Item>
        </div>
        </div>
    )





}