import React from 'react'
import { Card, Row, Col, ProgressBar } from 'react-bootstrap'

function ProgressLine(props) {
  return (
    <Row hidden={props.link == 'init' || props.link != ''}>
      <Col><p><Card body><ProgressBar animated now={100} /></Card></p></Col>
    </Row>
  )
}

export default ProgressLine
