import {useState} from 'react';
import {Row,Col,Button,Form} from 'react-bootstrap'


const Search = ({handlerSearch}) => {

    const[movies,setMovies]=useState('')

    const handlerSubmit=(e)=>{
        e.preventDefault();
        if(movies.trim()==="")return;
        handlerSearch(movies);
    }

    const handlerInput=(e)=>{
        setMovies(e.target.value);
    };
    return ( 
        <Row className="justify-content-center align-middle ">
            <Col md={8}>
                <Form onSubmit={handlerSubmit}>
                    <Form.Group>
                        <Form.Control
                        type='text'
                        placeholder='Buscar por Titulo'
                        onChange={handlerInput}/>
                    </Form.Group>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <Button type='submit'className='me-md-2' onClick={()=>{alert("en construccion🛠🧱")}}>Buscar</Button>
                    </div>
                    </Form>
            </Col>
        
        </Row>

     );
}
 
export default Search;