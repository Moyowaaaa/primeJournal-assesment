

export type data = {
    id:number,
    name:string,
    status:string,
    species:string,
    type:string,
    image:string
    }

    export interface paginationProps  {
        itemsPerPage:number,
        totalItems:any,
        paginate(number:number):void,
        setPage:React.Dispatch<React.SetStateAction<number>>
        page:number
    }

   