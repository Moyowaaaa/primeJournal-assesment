import React from 'react'
import { data } from '../types'

    interface characterDetails {
        data:data,
    }

const CharacterCards = ({data}: characterDetails) => {
  return (
    <div className='flex flex-col gap-4 w-full lg:w-5/12 shadow px-4' >
             <div className='flex gap-4 py-4'>
                 <div className='h-auto w-[8rem] lg:w-[10rem]' >
                    <img src={data.image} className="w-full"/>
                 </div>
               <div className='flex flex-col gap-4 text-sm lg:text-base'>
                <p>{data.name}</p>
                <p className={` `}>{data.status}</p>
                <p>{data.species}</p>
                <p >{data.type}</p>
               </div>
             </div>
         </div>
  )
}

export default CharacterCards