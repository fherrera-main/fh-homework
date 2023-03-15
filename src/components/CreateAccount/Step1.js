import { useEffect, useState } from 'react';
import { useOutletContext, useNavigate } from "react-router-dom";
import BackToLink from '../common/BackToLink';
import { Row, Col } from 'react-bootstrap';
import styles from './Step1.module.css'
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

const Step1 = ({ setNewStep }) => {
  const navigate = useNavigate();
  const [changeStepHandler] = useOutletContext();
  const [form, setForm] = useState({})

  useEffect(() => {
    console.log("Me actualice")
    changeStepHandler(1)
  });

  const handleChange = (e) => {
    const {name, value, type} = e.target;

    setForm((prevValues) => ({
      ...prevValues,
      [name]: type === 'checkbox' ? e.target.checked : value,
    }));
  };

  const handleClick = () => {
    navigate('/create-account/step-2')
  }

  return (
    <div>
      <Row className='mx-0'>
        <h3 className={'  ' + styles.stepSubtitle}>Primero, necesitamos tus datos personales</h3>
        <Col xs='12' md='5' className={' ' + styles.formColumnContainer}>
          <Input LabelText='Nombre' inputName='name' handleChange={handleChange} LeftSection={false} RightSection={false} InputType='text' />
        </Col>
        <Row className='mx-0 p-0'>
          <Col xs='12' md='6' className={' ' + styles.formColumnContainer}>
            <Input LabelText='Apellido paterno' inputName='ap_p' handleChange={handleChange} LeftSection={false} RightSection={false} InputType='text' />
          </Col>
          <Col xs='12' md='6' className={' ' + styles.formColumnContainer}>
            <Input LabelText='Apellido materno'  inputName='ap_m' handleChange={handleChange} LeftSection={false} RightSection={false} InputType='text' />
          </Col>
          <Col xs='12' md='6'  className={'mt-3 ' + styles.formColumnContainer}>
            <Button text='Continuar' onClick={handleClick}/>
          </Col>
        </Row>
      </Row>
    </div>
  )
}

export default Step1
