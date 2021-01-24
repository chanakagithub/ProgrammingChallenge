import { Card, Row, Col } from 'react-bootstrap';

function CountItem(props) {
  return (
    <Row>
      <Col><p><Card body hidden={props.count === ''}>{props.count}</Card></p></Col>
    </Row>
  )
}

export default CountItem
