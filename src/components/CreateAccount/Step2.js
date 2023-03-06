import { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useOutletContext } from "react-router-dom";
import BackToLink from '../common/BackToLink';
import Button from '../common/Button';
import Input from '../common/Input';
import Select from '../common/Select';
import styles from './Step2.module.css';

const Step2 = () => {
  const [changeStepHandler] = useOutletContext();
  const sexOptions = [
    { key: 1, value: 'Masculino' },
    { key: 2, value: 'Femenino' },
    { key: 3, value: 'Prefiero no decirlo' }
  ]


  useEffect(() => {
    console.log("Me actualice")
    changeStepHandler(2)
  });

  return (
    <div>
      <Row>
        <h3 className={'  ' + styles.stepSubtitle}>Segundo, dinos cuál es tu perfil de persona</h3>
        <Col xs='12'>
          <Input LabelText='Edad' LeftSection={false} RightSection={false} InputType='number' />
        </Col>
        <Col className='pb-4' xs='12'>
          <Select labelText='Sexo' selectOptions={sexOptions} />
        </Col>
        <Col xs='12'>
          <Button text='Continuar' />
        </Col>
        <br />
        <BackToLink text='Ir a paso 3' reditectTo={'/create-account/step-3'} />
      </Row>
    </div>
  )
}

export default Step2
