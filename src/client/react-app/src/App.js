import React, {useState} from 'react'
import './App.css';
import Header from './components/ui/Header'
import axios from './axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, Container, Row, Col, ProgressBar} from 'react-bootstrap';

const App = () => {
  const [link, setlink] = useState('init')

  const [alphabetical_count, setalphabetical_count] = useState([])
  const [real_numbers_count, setreal_numbers_count] = useState([])
  const [integers_count, setintegers_count] = useState([])
  const [alphanumerics_count, setalphanumerics_count] = useState([])

const generateReport = async () =>{
  setlink('')
  // setalphabetical_count('')
  // setreal_numbers_count('')
  // setintegers_count('')
  // setalphanumerics_count('')
  const request  = await axios.put('/report')
  console.log(request.data)
  setlink(request.data.link)
}

const getReport = async () =>{
  const response  = await axios.get('/report')
  
  setalphabetical_count('Alphabetical String: ' + response.data.alphabetical_count)
  setreal_numbers_count('Real Numbers: ' + response.data.real_numbers_count)
  setintegers_count('Integers: ' + response.data.integers_count)
  setalphanumerics_count('Alphanumerics: ' + response.data.alphanumerics_count)
}

  return (
    <div>
      <Container>
        <Row>
          <Col><Header/></Col>
        </Row>
        <Row>
          <Col><p><Button variant="primary" onClick={generateReport}>Generate</Button></p></Col>
        </Row>
        <Row hidden={link == 'init' || link != ''}>
          <Col><p><Card body><ProgressBar animated now={100} /></Card></p></Col>
        </Row>
        <Row hidden={link == 'init' || link == ''}>
          <Col><p><Card body>Link: <a href={link}>{link}</a></Card></p></Col>
        </Row>
        <Row>
          <Col><p><Button variant="primary" onClick={getReport}>Report</Button></p></Col>
        </Row>

        <Row>
          <Col><p><Card body hidden={alphabetical_count == ''}>{alphabetical_count}</Card></p></Col>
        </Row>
        <Row>
          <Col><p><Card body hidden={real_numbers_count == ''}>{real_numbers_count}</Card></p></Col>
        </Row>
        <Row>
          <Col><p><Card body hidden={integers_count == ''}>{integers_count}</Card></p></Col>
        </Row>
        <Row>
          <Col><p><Card body hidden={alphanumerics_count == ''}>{alphanumerics_count}</Card></p></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
