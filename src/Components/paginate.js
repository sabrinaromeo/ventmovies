import {Pagination, Row,Col} from 'react-bootstrap';


const Paginate = ({next, prev}) => {
    return ( 
        <Row>
            <Col>
            <Pagination>
                {!!prev && <Pagination.Prev/>}

                <Pagination.Next/>
            </Pagination>
            </Col>
        </Row>
     );
}
 
export default Paginate;