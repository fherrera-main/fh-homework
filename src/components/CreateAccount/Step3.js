import { useEffect } from 'react';
import { useOutletContext } from "react-router-dom";
import BackToLink from '../common/BackToLink';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../CreateAccount/Step3.module.css';
import Button from '../../components/common/Button.js';
import Input from '../../components/common/Input';

const Step3 = () => {
  const [changeStepHandler] = useOutletContext();
  
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
            <Input LabelText='Correo' LeftSection={false} RightSection={false}/>
          </Col>
        </Row>
        <Col xs={12} md={6} className={styles.input}>
          <Input LabelText='Contraseña' LeftSection={false} IconName='eye' IconColor='#fff'/>
        </Col>
        <Col xs={12} md={6} className={styles.input}>
          <Input LabelText='Confirmar contraseña' LeftSection={false} IconName='eye' IconColor='#fff'/>
        </Col>
        <Col xs={12} className={styles.button}>
          <Button text='Crear cuenta'/>
        </Col>
        <Col xs={12}>
        <BackToLink text='Volver al inicio' reditectTo={'/create-account/step-1'}/>
        </Col>
      </Row>
    </Container>
  )
}

export default Step3
