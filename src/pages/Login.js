import Button from "../components/common/Button";
import Input from '../components/common/Input';
import {Container,Row, Col} from 'react-bootstrap';
import styles from '../components/common/Login/Login.module.css';
import loginIcon from '../assets/homework-icon.svg';

const Login = () => {
  const log = () => {
    const USER_DATA = {
      name: 'hola'
    }
    localStorage.setItem('USER_DATA', USER_DATA)
  }
  return (
    <Container className={styles.ContainerToCenter}>
      <Row className={'' + styles.mainContainer}>
        <Col xs={12} className={'' + styles.logoContainer}>
          <img src={loginIcon} alt=''></img>
        </Col>
        <Col xs={12} className={'' + styles.inputContainer}>
          <Input LeftSection={false} LabelText='Correo' InputType='email' IconColor='#fff' />
          <Input LeftSection={false} LabelText='Contraseña' InputType='password' IconName='eye' IconColor='#fff' />
        </Col>
        <Col xs={12} className={'' + styles.recoveryLink}>
          <p>¿Olvidaste tu contraseña?</p>
        </Col>
        <Col xs={12} className={'' + styles.buttonLogin}>
          <Button onClick={log} text={'Iniciar sesión'} />
        </Col>
      </Row>
    </Container>

  )
}

export default Login