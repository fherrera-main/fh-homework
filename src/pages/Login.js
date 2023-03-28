import Button from "../components/common/Button";
import Input from '../components/common/Input';
import { Row, Col } from 'react-bootstrap';
import styles from '../components/common/Login/Login.module.css';
import loginIcon from '../assets/homework-icon.svg';
import { useState } from 'react';
import HomeworkLogoLamp from '../assets/homework-logo-lamp.svg'

const Login = () => {
  const [form, setForm] = useState({})

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setForm((prevValues) => ({
      ...prevValues,
      [name]: type === 'checkbox' ? e.target.checked : value,
    }));
  };

  const handleClick = () => {
    const {email, password} = form;
    const USER_DATA = {
      email,
      password
    }
    localStorage.setItem('USER_DATA', JSON.stringify(USER_DATA))
    //navigate('/home')
  }
  return (
    <div className={' ' + styles.loginFormContainer}>
      <Row className="rowContainerLogin">
        <Col sm={12}>
          <img className="mx-auto d-block mt-5" src={HomeworkLogoLamp} />
        </Col>
        <Col className="mt-5" sm={12}>
            <Row>
              <Col sm={12} md={6}>
                <Input handleChange={handleChange} inputName='email' LabelText='Correo' LeftSection={false} RightSection={false} />
              </Col>
              <Col sm={12} md={6}>
                <Input handleChange={handleChange} inputName='password' className LeftSection={false} LabelText='Contraseña' InputType='password' IconName='eye' IconColor='#fff' />
              </Col>
              <Col className="mt-3" sm={12} md={4} >
                <Button text='Iniciar sesión' onClick={handleClick} />
              </Col>
            </Row>
        </Col>
      </Row>
    </div>

  )
}

export default Login