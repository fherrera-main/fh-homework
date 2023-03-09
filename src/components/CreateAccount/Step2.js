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
      <Row className='mx-0'>
        <h3 className={'  ' + styles.stepSubtitle}>Segundo, dinos cuál es tu perfil de persona</h3>
        <Col xs='12' md='5' className={' '+ styles.formColumnContainer}>
          <Input LabelText='Edad' LeftSection={false} RightSection={false} InputType='number' />
        </Col>
        <Col className={'pb-4 '+ styles.formColumnContainer} xs='12' md='5' >
          <Select labelText='Sexo' selectOptions={sexOptions} />
        </Col>
        <Row className='mx-0 px-0'>
          <Col xs='12' md='5' className={styles.formColumnContainer}>
            <Button text='Continuar' />
          </Col>
          <br />
          <BackToLink text='Ir a paso 3' reditectTo={'/create-account/success'} />
        </Row>
      </Row>
    </div>
  )
}

export default Step2
