import {useState} from  'react';
import {Button,Form, Col, Row, Container} from 'react-bootstrap'




const FormMovie = () => {

    const initialState= {
        title:'',
        synopsis:'',
        year:'',
    };


    const handleInput=(e) => {
    const {name, value}= e.target;
    
        setMovie({
            ...movie,
            [name]:value,
        });
    };




   const addMovie=(e)=>{
    e.preventDefault();
    const{title,synopsis,year}=movie;
    if((title.trim()==="")||(synopsis.trim()==="")|| (year.trim()==="")) return;
    console.log("click");
    const newMovie = {
      title: title,
      synopsis: synopsis,
      year: year,
    };


     fetch('http://localhost:3008/api/movies', {
        method:'POST',
        body: JSON.stringify(newMovie),
        headers:{
            'Accept': 'application/json',
            'content-type': 'application/json'
            }
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(e=>console.log(e));


      console.log(newMovie);
      setMovie(initialState);
 
}


const[movie,setMovie]=useState(initialState);


//const handleReset=()=>{
        //setMovie(initialState);
    //}

  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
                <Form onSubmit={addMovie} >
                    <Form.Group>
                        <Form.Control
                        name="title"
                        type="text"
                        placeholder="Titulo Pelicula"
                        onChange={handleInput}
                        value={movie.title}
                       
                        />
                        <Form.Control
                        type="textarea"
                        name="synopsis"
                        placeholder="synopsis"
                        className="materialize-textarea"
                        onChange={handleInput}
                        value={movie.synopsis}
                       
                        />
                        <Form.Control
                        name="year"
                        type="number"
                        placeholder="año de estreno"
                        onChange={handleInput}
                        value={movie.year}
                       />
                        {/*<Form.Control
                        name="image"
                        type="url"
                        placeholder="link de imagen"
                        onChange={handleInput}
                        value={movie.image}/>*/}
            </Form.Group>
            <Button variant="primary" block
                     type="submit">
                    Cargar
            </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FormMovie;
