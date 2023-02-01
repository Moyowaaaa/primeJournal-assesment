import React, { useState,useEffect } from 'react'
import { data } from '../types'

    interface characterDetails {
        data:data,
    }

const CharacterCards = ({data}: characterDetails) => {


  const [styleClass,setStyleClass] = useState<string>('')
 
 useEffect(() => {
  setStyleClass(data.status)
 },[data])
  


  return (
    <div className='flex flex-col gap-4 w-full lg:w-5/12 shadow px-4' >
             <div className='flex gap-4 py-4'>
                 <div className='h-auto w-[8rem] lg:w-[10rem]' >
                    <img src={data.image} className="w-full" alt='character image'/>
                 </div>
               <div className='flex flex-col gap-4 text-sm lg:text-base'>
                <p>{data.name}</p>
                <p className={styleClass}>{data.status}</p>
                <p>{data.species}</p>
                <p >{data.type}</p>
               </div>
             </div>
         </div>
  )
}

export default CharacterCards