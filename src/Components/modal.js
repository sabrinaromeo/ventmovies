import {Button,Modal} from 'react-bootstrap';
import { useState } from 'react';


const OneModal=()=> {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar pelicula </Modal.Title>
        </Modal.Header>
            <Modal.Input placeholder="Titulo" name="title"/>
            <Modal.Input type="textarea" placeholder="Sinopsis" name="synopsis"/>
            <Modal.Input placeholder="año" name="year"/>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


<Form>
            <Form.Group>
                <Form.Control>
                    <Form.Control
                        name="title"
                        type="text"
                        placeholder="Titulo Pelicula"
                        onChange={handleInput}
                        //value={updateMovie.title}
                       
                        />
                        <Form.Control
                        type="textarea"
                        name="synopsis"
                        placeholder="synopsis"
                        className="materialize-textarea"
                        onChange={handleInput}
                        //value={updateMovie.synopsis}
                       
                        />
                        <Form.Control
                        name="year"
                        type="number"
                        placeholder="año de estreno"
                        onChange={handleInput}
                        //value={updateMovie.year}
                       />
                </Form.Control>
            </Form.Group>
            <Button variant="primary" block
                     type="submit">
                   Modificar
            </Button>
        </Form>

export default OneModal;