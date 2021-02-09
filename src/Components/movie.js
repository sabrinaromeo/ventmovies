import { Col, Card, Button } from 'react-bootstrap';
import {useState} from 'react';
import {Modal} from './newModal';


const Movie = ({_id,title,synopsis,year}) => {

 
           const [showModal, setShowModal]= useState(false);
           const openModal=()=>{
               setShowModal(prev=>!prev);
           }


    const deleteMovie=()=>{
        console.log(`delete${_id}`);
        fetch(`http://localhost:3008/api/movies/${_id}`,{
             method:'DELETE',
             headers:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
                }
        }
        )
            .then(res=>res.json())
            .then(data=>console.log(data))
            .catch(e=>console.log(e));
       }



    return ( 
        
        <Col md={4} className="mt-3 mb-3 text-center" >
            <Card>
               {/* <Card.Image variant="top" src={image} rounded/>*/}
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{synopsis}</Card.Text>
                     <small> Estreno:{year}</small>
                </Card.Body>
                <div className="d-flex justify-content-md-center space-around">
                <button className= "btn-floating waves-effect waves-light green right" onClick={()=>openModal(_id)}><i className="material-icons">edit</i></button>
                <Modal showModal={showModal} setShowModal={setShowModal} id={_id}/>
                <button className="btn-floating waves-effect waves-light red float-left"onClick={()=>{deleteMovie(_id)}}><i className="material-icons">delete</i></button>
                </div>
               
            </Card>
        </Col>
     )
};
 
export default Movie;