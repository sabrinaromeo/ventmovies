import React from 'react';
import {Form, Button} from 'react-bootstrap'
import {useState} from 'react'

export const Modal=({showModal,setShowModal, _id})=>{

     const [updateMovie,setUpdateMovie]=useState({});



    const handleInput=(e) => {
    const {name, value}= e.target;
    setUpdateMovie({
        ...updateMovie,
        [name]: value,
    })
    
    }
    const updateM=(e) => {
        e.preventDefault();
        const {title,synopsis,year}=updateMovie;
        const update={
            title,synopsis,year
        }
            console.log(`edit${_id}`);
           fetch(`http://localhost:3008/api/movies/${_id}`,{
             method:'PUT',
             body: JSON.stringify(update),
             headers:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
                }
            })
            .then(res=>res.json())
            .then(data=>console.log(data))
            .catch(e=>console.log(e));
        };

    

   

    return(
    <>{showModal ? <div><h3 className='small'>Proximamente</h3>
        {/*<form onSubmit={updateM}>
        <input type="text" name='title' placeholder="Titutlo" onChange={handleInput} />
        <input type="text" name='synopsis' placeholder="Synopsis" onChange={handleInput}/>
        <input type="number" name='year' placeholder="Año de estreno" onChange={handleInput}/>
        <Button type="submit" >Actualizar</Button>
    </form>*/}
    </div> : null};
    </>
    )
    

};