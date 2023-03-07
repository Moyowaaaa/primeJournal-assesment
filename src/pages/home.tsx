// @ts-ignore  
import React from 'react'
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import axios from 'axios'
import Loading from '../components/Loading';
import Pagination from '../components/Pagination';
import {useNavigate} from 'react-router-dom'
import CharacterCards from '../components/CharacterCards';
import Error from '../components/Error';
import { data } from '../types';



const Home = () => {
    const [page, setPage] = useState<number>(1);
    const [isLoading,setIsLoading] = useState<boolean>(false)
    const [err,setErr] = useState<boolean>(false)
    
    
    
    const fetchResults = async() => {
        try {
            setIsLoading(true)
            const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
            setIsLoading(false)
            return response.data
            
        } catch (error) {
            setErr(true)
            throw error
            
        }
    }

    const {data,error} = useQuery(['data',page], fetchResults)
    const navigate = useNavigate() 



    const paginate = () => {
        navigate(`/?page=${page}`, undefined)
    };

    useEffect(() => {
        
        fetchResults();
        navigate(`/?page=${page}`, undefined)
      }, [page]);

    




  

    
  return (
<div>
{isLoading ? (<Loading />) : (

<div className='w-full lg:w-10/12 mx-auto py-12'>
    {error || err ? (
       <Error />
    ) : (
        <div className='flex flex-col'>
        <h1 className='text-center py-4 font-bold text-xl'>Rick and Morty Characters</h1>
    
    <div className='flex flex-wrap gap-10 justify-center'>
        {data && data?.results.slice(0,16).map((data:data, index:number) => (
            <CharacterCards data={data} key={index} />
         ))}
        </div>
       
        <Pagination 
    itemsPerPage={2} 
    totalItems={data?.info.pages}
    paginate={paginate}
    setPage={setPage}
    page={page}
    />
   
        </div>
    )}
    

   
  
</div>


)}


</div>

    
  )
}

export default Home