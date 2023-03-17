import { useEffect, useState } from 'react';
import { useOutletContext, useNavigate } from "react-router-dom";
import BackToLink from '../common/BackToLink';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../CreateAccount/Step3.module.css';
import Button from '../../components/common/Button.js';
import Input from '../../components/common/Input';
import { useDispatch } from 'react-redux';
import { set_step3_form_action } from '../../store/actions/createAccountFormActions';

const Step3 = () => {
  const [changeStepHandler] = useOutletContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  
  const handleChange = (e) => {
    const {name, value, type} = e.target;

    setForm((prevValues) => ({
      ...prevValues,
      [name]: type === 'checkbox' ? e.target.checked : value,
    }));
  };

  const handleClick = () => {
    dispatch(set_step3_form_action(form))
    navigate('/create-account/success')
    //get redux state & post to API -> redirect on response
  };

  useEffect(() => {
    console.log("Me actualice")
    changeStepHandler(3)
  }, []);

  return (
    <div>
      <Row className='mx-0'>
        <h3 className={'  ' + styles.stepSubtitle}>Por último, indícanos los datos de tu cuenta</h3>
        <Col xs='12' md='5' className={' ' + styles.formColumnContainer}>
          <Input handleChange={handleChange} inputName='email' InputType='email' LabelText='Correo' LeftSection={false} RightSection={false}/>
        </Col>
        <Row className='mx-0 p-0'>
          <Col xs='12' md='6' className={' ' + styles.formColumnContainer}>
            <Input handleChange={handleChange} inputName='password' LabelText='Contraseña' InputType='password' LeftSection={false} IconName='eye' IconColor='#fff'/>
          </Col>
          <Col xs='12' md='6' className={' ' + styles.formColumnContainer}>
            <Input handleChange={handleChange} inputName='passconf' LabelText='Confirmar contraseña' InputType='password' LeftSection={false} IconName='eye' IconColor='#fff'/>
          </Col>
          <Col xs='12' md='6'  className={'mt-3 ' + styles.formColumnContainer}>
            <Button onClick={handleClick} text='Crear cuenta'/>
          </Col>
        </Row>
        <Col xs='12' className={'mt-3 '+styles.formColumnContainer}>
          <BackToLink text='Ir a paso 2' reditectTo={'/create-account/step-2'}/>
        </Col>
      </Row>
    </div>
  )
};

export default Step3
