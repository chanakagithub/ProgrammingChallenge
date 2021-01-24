import { Button, Container, Row, Col } from 'react-bootstrap'
import LinkItem from '../LinkItem'
import GenerateLogic from "./GenerateLogic";

function Generate() {

  const {link, generateReport} = GenerateLogic()
  // const [link, setlink] = useState('init')

  // const generateReport = async () => {
  //   setlink('')
  //   const request = await axios.put('/report')
  //   console.log(request.data)
  //   setlink(request.data.link)
  // }

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
