import styles from '../components/CreateAccount/CreateAccount.module.css'; 
import { Row, Col } from 'react-bootstrap';
import leftArrow from '../assets/left-arrow.svg';
import Stepper from '../components/common/Stepper';
import { Outlet, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const CreateAccount = () => {
  let navigate = useNavigate();
  const [step, setStep] = useState(1);
  useEffect(() => {
    console.log("Me actualice")
    if(step === 1 ) navigate('/create-account/step-1');
  },[step]);
  const changeStepHandler = (step) => setStep(step);

  return (
    <div className={`mt-3 ${styles.divViewContainer}`}>
      <h1 className={` ${styles.viewTitle}`}> <span><img src={leftArrow} /></span> Crear cuenta</h1>
      <Row>
        <Col>
          <Stepper currentStep={step} />
        </Col>
      </Row>
      <Outlet context={[changeStepHandler, step]}></Outlet>
    </div> 
  )
}

export default CreateAccount
