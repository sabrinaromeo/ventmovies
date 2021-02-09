
import {useState,useEffect} from 'react'


const BASE_URL= "http://localhost:3008/api";

export const useFetch = ( url,initialState={},charge) => {

        const [data,setData]=useState({});
        const [fetching,setFetching]=useState(true);
        const [error,setError]=useState(false);

        
        
         const fetchData= async()=>{
            try {
                const result = await fetch(`${BASE_URL}/${url}`);
                const data = await result.json();
                setData(data);
                setFetching(false);

            }catch(e){
                setData(initialState);
                setFetching(false);
                setError(true);
                console.error(e)
        }
    };

    useEffect(() =>{
        fetchData();
    },[charge]);

    return [data,fetching,error];

};

