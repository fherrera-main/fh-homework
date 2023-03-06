import { useEffect } from 'react';
import { useOutletContext } from "react-router-dom";
import BackToLink from '../common/BackToLink';
import {Container,Row, Col} from 'react-bootstrap';
import Button from "../common/Button";
import Input from '../common/Input';
import styles from '../CreateAccount/Step1.module.css'
const Step1 = ({setNewStep}) => {
  const [changeStepHandler] = useOutletContext();

  useEffect(() => {
    console.log("Me actualice")
    changeStepHandler(1)
  });
  
  return (
    <div>
      <Col xs={12} className={'' + styles.tittle}><h1>Primero, necesitamos tus datos personales</h1></Col>
      <Col xs={12} className={'' + styles.inputContainer}>
        <Input LeftSection={false} LabelText='Nombre' InputType='text' IconColor='#fff'/>
        <Input LeftSection={false} LabelText='Apellido Paterno' InputType='text' IconColor='#fff'/>
        <Input LeftSection={false} LabelText='Apellido Materno' InputType='text' IconColor='#fff'/>
      </Col>
      <Col xs={12} className={'' + styles.buttonLogin}>
          <Button onClic={Step1} text={'Continuar'} reditectTo={'/create-account/step-2'}/>
      </Col>
      {/* <BackToLink text='Ir a paso 2' reditectTo={'/create-account/step-2'}/> */}
      
    </div>
    
  )
}

export default Step1
