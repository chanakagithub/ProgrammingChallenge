import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import ProgressLine from './ProgressLine'

function LinkItem(props) {
  return (
    <div>
      <ProgressLine link={props.link}></ProgressLine>
      <Row hidden={props.link == 'init' || props.link == ''}>
        <Col><p><Card body>Link: <a href={props.link}>{props.link}</a></Card></p></Col>
      </Row>
    </div>
  )
}

export default LinkItem
