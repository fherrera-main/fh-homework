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
    <Container>
      <Row>
        <Col>
          <h2 className={styles.subtitle}>Por último, indícanos los datos de tu cuenta</h2>
        </Col>
        <Col xs={12}>
          <Input LabelText='Correo' LeftSection={false} RightSection={false}/>
        </Col>
        <Col xs={12}>
          <Input LabelText='Contraseña' LeftSection={false} IconName='eye' IconColor='#fff'/>
        </Col>
        <Col xs={12}>
          <Input LabelText='Confirmar contraseña' LeftSection={false} IconName='eye' IconColor='#fff'/>
        </Col>
        <Col className={styles.button}>
          <Button text='Crear cuenta'/>
        </Col>
      </Row>
      Paso 3
      <BackToLink reditectTo={'/create-account/step-1'}/>
    </Container>
  )
}

export default Step3
