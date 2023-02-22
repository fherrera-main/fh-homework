import Button from "../components/common/Button";
import Input from '../components/common/Input'
import {Container,Row, Col} from 'react-bootstrap'

const Login = () => {
  return (
    <Container>
        <Row>
            <Col>
              <h1>Homework</h1>
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={6}>
              <Input/>
            </Col>
            <Col xs={12} md={6}>
              <Input/>
            </Col>
            <Col xs={12} md={6}>
              <Button text={'Carlos weko y bien maraca'}/>
            </Col>
        </Row>
    </Container>

  )
}

export default Login