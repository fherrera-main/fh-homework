import Button from "../components/common/Button";
import Input from '../components/common/Input';
import { Container, Row, Col } from 'react-bootstrap';
import styles from "../components/PasswordRecovery/Recovery.module.css";
import BackToLink from "../components/common/BackToLink";

const Recovery = () => {
  return (
    <Container className={styles.formContainer}>
      <Row>
        <Col xs={12}>
          <h1 className={styles.title}>Restaurar Contraseña</h1>
        </Col>
        <Row>
          <Col xs={12} className={styles.input}>
            <Input LeftSection={false} LabelText='Nueva Contraseña' InputType='password' IconName='eye' IconColor='#fff' />
          </Col>
          <Col xs={12} className={styles.input}>
            <Input LeftSection={false} LabelText='Confirmar Contraseña' InputType='password' IconName='eye' IconColor='#fff' />
          </Col>
        </Row>
        <Col xs={12} className={styles.button}>
          <Button text={'Restablecer contraseña'} />
        </Col>
        <Col xs={12} className={styles.back}>
          <BackToLink text='Volver al login'/>
        </Col>


      </Row>
    </Container>
  )
}

export default Recovery
