import {useEffect, useState} from 'react';
import {Col, Row, Card} from 'react-bootstrap';
import  Movie  from './movie';
import Paginate from './paginate';
//spinner
import Loading from './loading';


import {useFetch} from './CustomHooks/useFetch'
const BASE_URL= "http://localhost:3008/api";

const Movies = ({search}) => {
    const [url, setUrl]=useState(BASE_URL);

    useEffect(() =>{
        const newUrl= !search? BASE_URL :`${BASE_URL}?title=${search}`;
        setUrl(newUrl);
    },[search]);


    const [movies,fetching,error]=useFetch('movies');
    
    
    /*
    const [movies,setMovies]=useState([]);
    const [fetching, setFetching]=useState(true);//mi cargando
    const [error,setError]=useState(false);

    const getMovies= async(endpoint)=>{

        try{
            const result = await fetch(`${URL}/${endpoint}`);
            const data = await result.json();
            console.log(data);
            setMovies(data); //array de peliculas en mi hook
            setFetching(false);
        } catch(e) {
            setMovies([]);
            setFetching(false);
            setError(true);
            console.error(e)
        }
    };

    //carga de peliculas  en la carga
    useEffect(()=>{
        console.log('trae las peliculas')
        getMovies('movies');
    },[]);
*/

    return (
        <>
        <Row>
            {
                fetching ?
                <Loading/>
                : movies.map((movie, index) =>(
                    <Movie key={movie._id} {...movie}/>
                ))
            };
        </Row>
        <Paginate /*{...info}*//>
        </>
     );
}
 
export default Movies;



