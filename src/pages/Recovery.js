import Button from "../components/common/Button";
import Input from '../components/common/Input'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "../components/PasswordRecovery/Recovery.module.css";

const Recovery = () => {
  return (
    <Container className={styles.formContainer}>
      <Row>
        <Col>
          <p className={"m-0 " + styles.headerlogo}>
            <span>
              home <br /> work.
            </span>
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 className={styles.title}>Restaurar Contraseña</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Input LeftSection={false} LabelText='Nueva Contraseña' InputType='password' IconName='eye' IconColor='#fff' />
        </Col>
      </Row>
      <Row>
        <Col>
          <Input LeftSection={false} LabelText='Confirmar Constraseña' InputType='password' IconName='eye' IconColor='#fff' />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button text={'Restablecer contraseña'} />
        </Col>
      </Row>
    </Container>
  )
}

export default Recovery
