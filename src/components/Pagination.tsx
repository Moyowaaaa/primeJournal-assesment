import React,{useState, useEffect} from 'react'
import { paginationProps } from '../types'


const Pagination = ({
    itemsPerPage,totalItems,paginate,setPage,page
}:paginationProps) => {

    const [prevDisabled,setPrevDisabled] = useState<boolean>(false)
    const [nextDisabled,setNextDisabled] = useState<boolean>(false)

    

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalItems/itemsPerPage); i++) {
        pageNumbers.push(i);
      }



      const handlePrevious = ():void => {
            setPrevDisabled(page === 1)
            setPage(page - 1)
            paginate(page-1)
        
      }

      const handleNext = ():void => {
            setNextDisabled(page === 5)
            setPage(page + 1)
            paginate(page+1)
              
       
      }

      useEffect(() => {
        setNextDisabled(page === 5)
        setPrevDisabled(page === 1)
      },[page])



  return (
    <div className='w-full  flex justify-center py-6 px-10 gap-4 items-center'>

        <button className={`text-2xl ${prevDisabled ? 'text-[grey] text-base' : ''}`} onClick={handlePrevious} disabled={prevDisabled}>&larr;</button>

         <div className='flex gap-4 text-lg cursor-pointer items-center'>
        {pageNumbers.map(number => (
            <div key={number} onClick={() => {paginate(number); setPage(number)}}>
                  <p className={`${number === page ? "font-bold rounded-full shadow px-2" : ''}`} >{number}</p>
            </div>
          
        ))}
    </div>

    <button className={`text-2xl ${nextDisabled ? 'text-[grey] text-base' : ''}`}  onClick={handleNext} disabled={nextDisabled}>&rarr;</button>
    </div>
   
  )
}

export default Pagination