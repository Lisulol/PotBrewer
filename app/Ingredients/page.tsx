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

import { useEffect, useState } from "react"



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
    useEffect(()=>{
         
        if(selectedIngredients.length === 2 && selectedIngredients[0] === selectedIngredients[1])
        {
            alert("Please add 2 different ingredients(I didn't account for someone to do 2 same ingredients srry)")
            setSelectedIngredients([])
        }
    },[selectedIngredients])



    return(
        
        <div className="h-screen w-full flex items-center justify-center flex-col gap-5">
            
            <div className='w-full overflow-x-auto flex justify-center items-center' >
                <div className='flex flex-row gap-8 pb-4'>
                    <div className='flex-shrink-0 w-64 h-64'>

                    <Item variant='muted' size='sm'>
                        <ItemHeader>Femboy extract</ItemHeader>
                        <ItemMedia />
                        <ItemContent>
                        <ItemTitle><IconNeedle/></ItemTitle>
                        <ItemDescription>
                            <p className='grow flex'>
                                 A rare item said only to be found in the land of Pierogis<br></br>
                            </p>
                            <Button variant="outline" onClick={() => {setIngredientsofpot(Listofingredients[0]); {handleClick()}}} >Add It!</Button>
                        </ItemDescription>
                        </ItemContent>
                        <ItemActions />
                        
                    </Item>
                </div>
                <div className='flex-shrink-0 w-64 h-64'>
                    <Item variant='muted' size='sm'>
                        <ItemHeader>Rabbit&apos;s foot</ItemHeader>
                        <ItemMedia />
                        <ItemContent>
                        <ItemTitle><IconCarrot/></ItemTitle>
                        <ItemDescription>
                            <p className='grow flex'>
                            Nothing special a foot it is said that when u add it one vegan dies<br></br></p>
                            <Button variant="outline" onClick={() => {setIngredientsofpot(Listofingredients[1]); {handleClick()}}}>Add It!</Button>
                        </ItemDescription>
                        </ItemContent>
                        <ItemActions />
                        
                    </Item>
                </div>
                <div className='flex-shrink-0 w-64 h-64'>
                    <Item variant='muted' size='sm'>
                        <ItemHeader>School Server</ItemHeader>
                        <ItemMedia />
                        <ItemContent>
                        <ItemTitle><IconServer/></ItemTitle>
                        <ItemDescription>
                            <p className='grow flex'>
                            Just a serv.. wait wtf is it doing here<br></br></p>
                            <Button variant="outline" onClick={() => {setIngredientsofpot(Listofingredients[2]); {handleClick()}}}>Add It!</Button>
                        </ItemDescription>
                        </ItemContent>
                        <ItemActions />
                        
                    </Item>
                </div>
                <div className='flex-shrink-0 w-64 h-64'>
                    <Item variant='muted' size='sm'>
                        <ItemHeader>Friend&apos;s Vape</ItemHeader>
                        <ItemMedia />
                        <ItemContent>
                        <ItemTitle><IconSmoking/></ItemTitle>
                        <ItemDescription>
                            <p className='flex-grow'>
                            Smoking is bad<br></br></p>
                            <Button variant="outline" onClick={() => {setIngredientsofpot(Listofingredients[3]); {handleClick()}}}>Add It!</Button>
                        </ItemDescription>
                        </ItemContent>
                        <ItemActions />
                        
                    </Item>
                </div>
                <div className='flex-shrink-0 w-64 h-64'>
                    <Item variant='muted' size='sm'>
                        <ItemHeader>Bocian 0.5L 40% 20zl</ItemHeader>
                        <ItemMedia />
                        <ItemContent>
                        <ItemTitle><IconVaccineBottle/></ItemTitle>
                        <ItemDescription>
                            <p className='flex-grow'>
                            Polish god&apos;s nectar<br></br></p>
                            <Button variant="outline" onClick={() => {setIngredientsofpot(Listofingredients[4]); {handleClick()}}}>Add It!</Button>
                        </ItemDescription>
                        </ItemContent>
                        <ItemActions />
                        
                    </Item>
                </div>

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