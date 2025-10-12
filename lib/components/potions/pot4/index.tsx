import { Item, ItemContent, ItemDescription, ItemHeader, ItemMedia } from "@/components/ui/item";

export default function Potion4 (){
    return(
        <div className="fixed top-0 left-0 w-screen h-screen z-[9999] flex items-center justify-center bg-white">
            <div className="text-black text-4xl font-bold animate-pulse">
            <Item variant="outline">
                <ItemContent>
                    <ItemHeader className="flex items-center justify-center">
                        The Polish Debugger
                    </ItemHeader>
                    <div className="flex items-center justify-center flex-col">
                    <ItemMedia>
                        <img src="/assets/potion-icon-png-15.png" alt="Potion Icon" />
                    </ItemMedia>
                    <ItemDescription className="max-w-3xs text-center mt-2">Fixes 10 bugs in your code but adds 20 new ones with Polish variable names.</ItemDescription>
                    </div>
                </ItemContent>
            </Item>
        </div>
        </div>
    )





}