import Button from "../components/common/Button";
import Input from '../components/common/Input'
import {Container,Row, Col} from 'react-bootstrap'

const Recovery = () => {
  return (
    <Container>
      <Row>
        <Col>
            <h1>Logo Homework</h1>
        </Col>
      </Row>
      <Row>
        <Col>
            <h1>Restaurar Contraseña</h1>
        </Col>
      </Row>
      <Row>
        <Col>
            <h2>Nueva contraseña</h2>
            <Input/>
        </Col>
        <Col>
            <h2>Confirme contraseña</h2>
            <Input/>
        </Col>
      </Row>
      <Row>
        <Col>
            <Button text={'Restablecer contraseña'}/>
        </Col>
      </Row>
    </Container>
  )
}

export default Recovery
