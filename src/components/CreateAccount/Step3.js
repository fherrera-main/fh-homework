import { useEffect, useState } from 'react';
import { useOutletContext } from "react-router-dom";
import BackToLink from '../common/BackToLink';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../CreateAccount/Step3.module.css';
import Button from '../../components/common/Button.js';
import Input from '../../components/common/Input';

const Step3 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passconf, setPassconf] = useState('');
  const [changeStepHandler] = useOutletContext();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handlePassconf = (e) => {
    setPassconf(e.target.value);
  };
  
  const handleClick = () => {
    console.log(email);
    console.log(password);
    console.log(passconf);
  };

  useEffect(() => {
    console.log("Me actualice")
    changeStepHandler(3)
  });

  return (
    <Container className={styles.container}>
      <Row>
        <Col xs={12}>
          <h2 className={styles.subtitle}>Por último, indícanos los datos de tu cuenta</h2>
        </Col>
        <Row xs={12}>
          <Col className={styles.input}>
            <Input onChange={handleEmail} InputType='email' LabelText='Correo' LeftSection={false} RightSection={false}/>
          </Col>
        </Row>
        <Col xs={12} md={6} className={styles.input}>
          <Input onChange={handlePassword} LabelText='Contraseña' InputType='password' LeftSection={false} IconName='eye' IconColor='#fff'/>
        </Col>
        <Col xs={12} md={6} className={styles.input}>
          <Input onChange={handlePassconf} LabelText='Confirmar contraseña' InputType='password' LeftSection={false} IconName='eye' IconColor='#fff'/>
        </Col>
        <Col xs={12} className={styles.button}>
          <Button onClick={handleClick} text='Crear cuenta'/>
        </Col>
        <Col xs={12}>
        <BackToLink text='Volver al inicio' reditectTo={'/create-account/success'}/>
        </Col>
      </Row>
    </Container>
  )
};

export default Step3
