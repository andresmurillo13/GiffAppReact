import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";




const useFetchGifs = ( category ) => {

const [images, SetImages] = useState([]);
const [isLoading, SetIsLoading] = useState(true)

   const getImages = async () =>{
    const newImages = await getGifs( category );
    SetImages( newImages );
    SetIsLoading(false);
   }

    useEffect(() => {
        getImages();
    }, [])

    return {
        images,
        isLoading
    }
}

export default useFetchGifs
