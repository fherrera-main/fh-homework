import Button from "../components/common/Button";
import Input from '../components/common/Input'
import {Container,Row, Col} from 'react-bootstrap'
import styles from "../components/PasswordRecovery/Recovery.module.css";

const Recovery = () => {
  return (
    <Container>
      <Row>
        <Col>
            <h1 className={styles.logo}>Logo Homework</h1>
        </Col>
      </Row>
      <Row>
        <Col>
            <h1 className={styles.title}>Restaurar Contraseña</h1>
        </Col>
      </Row>
      <Row>
        <Col>
            <h2 className={styles.input_text}>Nueva contraseña</h2>
            <Input/>
        </Col>
      </Row>
      <Row>
        <Col>
            <h2 className={styles.input_text}>Confirme contraseña</h2>
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
