import {useState} from'react';
import Header from './Static/header'
import FormMovie from './Components/formMovie'
import Movies from'./Components/movies'
import Search from'./Components/search'
import { Container, Col, Row } from 'react-bootstrap'

const App=()=> {


  const [search, setSearch]=useState('')
  const [charge,setCharge]=useState('')

  const handlerSearch=(name)=> {

  }
  
return( 
  <>
    <Header title="VentMovies🎞"/>
    <Search handlerSearch={handlerSearch}/>
    <Container>
      <Row>
        <Col md={3} className="aling-content-center">
        <FormMovie/>
        </Col>
        <Col md={9}>
        <Movies search={search}/>
        </Col>
      </Row>
    </Container>


    
  </>
);
};

export default App;
