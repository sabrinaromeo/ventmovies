import {Row, Col} from 'react-bootstrap'

const Header = ({title}) => {
    return ( 
        <Row>
            <Col>
            <nav className="light-blue darken">
            <div className="container">
                <h1 className='text-center'>{title}</h1>
            </div>
         </nav>
            </Col>
        </Row>
        
     );
}
 
export default Header;