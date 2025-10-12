'use client'
import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { useIngredients } from "@/lib/providers/PotionContext"
import { IconCarrot, IconNeedle, IconServer, IconSmoking, IconVaccineBottle } from "@tabler/icons-react"
import Link from "next/link"

import { useState } from "react"



export default function Ingredients(){

    const {selectedIngredients, setSelectedIngredients} = useIngredients()
    const [Listofingredients] = useState<string[]>([

        'Femboy extract',
        'Rabbits foot',
        'School Server',
        'Freinds vape',
        'Bocian'
    ]
    )


        


    const setIngredientsofpot = (ingredient : string) => { 
        setSelectedIngredients(prev => [...prev, ingredient])



    }

    function handleClick(){
        if( selectedIngredients.length > 1)
        {
            alert("U cant add more then 2 ingredients. Maybe u are asking why.... Dont ask. Select again")
            setSelectedIngredients([])
        }
        



    }



    return(
        
        <div className="h-screen w-full flex items-center justify-center flex-col gap-5">
            
            <div className='flex flex-row gap-8' >
                <div>
                    <Item variant='muted' size='sm'>
                        <ItemHeader>Femboy extract</ItemHeader>
                        <ItemMedia />
                        <ItemContent>
                        <ItemTitle><IconNeedle/></ItemTitle>
                        <ItemDescription>
                            A rare item said only to be found in the land of Pierogis<br></br>
                            <Button variant="outline" onClick={() => {setIngredientsofpot(Listofingredients[0]); {handleClick()}}} >Add It!</Button>
                        </ItemDescription>
                        </ItemContent>
                        <ItemActions />
                        
                    </Item>
                </div>
                <div>
                    <Item variant='muted' size='sm'>
                        <ItemHeader>Rabbit's foot</ItemHeader>
                        <ItemMedia />
                        <ItemContent>
                        <ItemTitle><IconCarrot/></ItemTitle>
                        <ItemDescription>
                            Nothing special a foot it is said that when u add it one vegan dies<br></br>
                            <Button variant="outline" onClick={() => {setIngredientsofpot(Listofingredients[1]); {handleClick()}}}>Add It!</Button>
                        </ItemDescription>
                        </ItemContent>
                        <ItemActions />
                        
                    </Item>
                </div>
                <div>
                    <Item variant='muted' size='sm'>
                        <ItemHeader>School Server</ItemHeader>
                        <ItemMedia />
                        <ItemContent>
                        <ItemTitle><IconServer/></ItemTitle>
                        <ItemDescription>
                            Just a serv.. wait wtf is it doing here<br></br>
                            <Button variant="outline" onClick={() => {setIngredientsofpot(Listofingredients[2]); {handleClick()}}}>Add It!</Button>
                        </ItemDescription>
                        </ItemContent>
                        <ItemActions />
                        
                    </Item>
                </div>
                <div>
                    <Item variant='muted' size='sm'>
                        <ItemHeader>Friend's Vape</ItemHeader>
                        <ItemMedia />
                        <ItemContent>
                        <ItemTitle><IconSmoking/></ItemTitle>
                        <ItemDescription>
                            Smoking is bad<br></br>
                            <Button variant="outline" onClick={() => {setIngredientsofpot(Listofingredients[3]); {handleClick()}}}>Add It!</Button>
                        </ItemDescription>
                        </ItemContent>
                        <ItemActions />
                        
                    </Item>
                </div>
                <div>
                    <Item variant='muted' size='sm'>
                        <ItemHeader>Bocian 0.5L 40% 20zl</ItemHeader>
                        <ItemMedia />
                        <ItemContent>
                        <ItemTitle><IconVaccineBottle/></ItemTitle>
                        <ItemDescription>
                            Polish god's nectar<br></br>
                            <Button variant="outline" onClick={() => {setIngredientsofpot(Listofingredients[4]); {handleClick()}}}>Add It!</Button>
                        </ItemDescription>
                        </ItemContent>
                        <ItemActions />
                        
                    </Item>
                </div>

            </div>
            <div className="flex flex-col items-center justify-center">
          <Link href={'/'} className='cursor-pointer'>
                <Button variant="outline">
          Return
          </Button>
          </Link>
            </div>
        </div>
    )
}