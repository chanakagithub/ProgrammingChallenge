import { Button, Container, Row, Col } from 'react-bootstrap'
import LinkItem from '../LinkItem'
import GenerateLogic from "./GenerateLogic";

function Generate() {

  const {link, generateReport} = GenerateLogic()

  return (
    <Container>
      <Row>
        <Col><p><Button variant="primary" onClick={generateReport}>Generate</Button></p></Col>
      </Row>
      <LinkItem link={link}></LinkItem>
    </Container>
  )
}

export default Generate
