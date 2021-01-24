import React, { useState } from 'react'
import axios from '../../axios'
import { Button, Card, Container, Row, Col } from 'react-bootstrap'
import CountItem from './CountItem'

function Report() {
  const [alphabetical_count, setalphabetical_count] = useState('')
  const [real_numbers_count, setreal_numbers_count] = useState('')
  const [integers_count, setintegers_count] = useState('')
  const [alphanumerics_count, setalphanumerics_count] = useState('')

  const getReport = async () => {
    const response = await axios.get('/report')

    setalphabetical_count('Alphabetical String: ' + response.data.alphabetical_count)
    setreal_numbers_count('Real Numbers: ' + response.data.real_numbers_count)
    setintegers_count('Integers: ' + response.data.integers_count)
    setalphanumerics_count('Alphanumerics: ' + response.data.alphanumerics_count)
  }

  return (
    <Container>
      <Row>
        <Col><p><Button variant="primary" onClick={getReport}>Report</Button></p></Col>
      </Row>

      <CountItem count={alphabetical_count} />
      <CountItem count={real_numbers_count} />
      <CountItem count={integers_count} />
      <CountItem count={alphanumerics_count} />
    </Container>
  )
}

export default Report
