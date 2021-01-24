import React, { useState } from 'react'
import axios from '../../axios'
import { Button, Card, Container, Row, Col, ProgressBar } from 'react-bootstrap'
import LinkItem from './LinkItem'

function Generate() {
  const [link, setlink] = useState('init')

  const generateReport = async () => {
    setlink('')
    const request = await axios.put('/report')
    console.log(request.data)
    setlink(request.data.link)
  }

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
