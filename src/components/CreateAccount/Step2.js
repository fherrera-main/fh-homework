import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useOutletContext, useNavigate } from "react-router-dom";
import BackToLink from '../common/BackToLink';
import Button from '../common/Button';
import Input from '../common/Input';
import Select from '../common/Select';
import styles from './Step2.module.css';

const Step2 = () => {
  const navigate = useNavigate();
  const [changeStepHandler] = useOutletContext();
  const [form, setForm] = useState({})

  const sexOptions = [
    { key: 1, value: 'Masculino' },
    { key: 2, value: 'Femenino' },
    { key: 3, value: 'Prefiero no decirlo' }
  ]

  useEffect(() => {
    console.log("Me actualice")
    changeStepHandler(2)
  });

  const handleClick = () => {
    navigate('/create-account/step-3')
  }

  const handleChange = (e) => {
    const {name, value, type} = e.target;

    setForm((prevValues) => ({
      ...prevValues,
      [name]: type === 'checkbox' ? e.target.checked : value,
    }));
  };

  const handleSelectChange = (e) => {
    const {name, value} = e.target;
    console.log(value)
    setForm((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div>
      <Row className='mx-0'>
        <h3 className={'  ' + styles.stepSubtitle}>Segundo, dinos cuál es tu perfil de persona</h3>
        <Col xs='12' md='5' className={' ' + styles.formColumnContainer}>
          <Input LabelText='Edad' inputName='age' handleChange={handleChange} LeftSection={false} RightSection={false} InputType='number' />
        </Col>
        <Col className={'pb-4 ' + styles.formColumnContainer} xs='12' md='5' >
          <Select labelText='Sexo' selectName='sex' handleSelectChange={handleSelectChange} selectOptions={sexOptions} />
        </Col>
        <Row className='mx-0 px-0'>
          <Col xs='12' md='5' className={styles.formColumnContainer}>
            <Button text='Continuar' onClick={handleClick} />
          </Col>
          <br />
        </Row>
        <Col xs='12' className={'mt-3 '+styles.formColumnContainer}>
          <BackToLink text='Ir a paso 1' reditectTo={'/create-account/step-1'} />
        </Col>
      </Row>
    </div>
  )
}

export default Step2
