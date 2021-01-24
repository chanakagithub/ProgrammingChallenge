import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import CountItem from '../CountItem'
import ReportLogic from "./ReportLogic";

function Report() {
  
  const {alphabetical_count, real_numbers_count, integers_count, alphanumerics_count,getReport} = ReportLogic()

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
