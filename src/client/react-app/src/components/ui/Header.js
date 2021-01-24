import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'

const Header = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Jumbotron>
            <h1>Programming Challenge</h1>
            <p>
              This is a simple React app with Flask (Python) backend,
              Generate button will generate random .txt file and download link displayed after Generate button.
              Download file is 2MB (2,097,152bytes) in size.
              Report button will display random.txt file summery.
              All the communication between frontend and backend done via Flask (Python) APIs.
        </p>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  )
}

export default Header
