import { Row, Col } from 'react-bootstrap';
import step1 from '../../assets/step-1.svg';
import step2 from '../../assets/step-2.svg';
import step3 from '../../assets/step-3.svg';
import step2NoFocus from '../../assets/step-2-no-focus.svg';
import step3NoFocus from '../../assets/step-3-no-focus.svg';
import stepChecked from '../../assets/step-checked.svg';
import styles from './Stepper.module.css';

const Stepper = ({ currentStep }) => {

  const Step1Component = () => {
    return <>
      <img src={step1} className='' />
      <img src={step2NoFocus} className='' />
      <img src={step3NoFocus} className='' />
    </>
  }

  const Step2Component = () => {
    return <>
      <img src={stepChecked} className='' />
      <img src={step2} className='' />
      <img src={step3NoFocus} className='' />
    </>
  }

  const Step3Component = () => {
    return <>
      <img src={stepChecked} className='' />
      <img src={stepChecked} className='' />
      <img src={step3} className='' />
    </>
  }

  return (
    <>
      <Row>
        <Col xs={12}>
          {
            currentStep === 1 && <Step1Component /> || 
            currentStep === 2 && <Step2Component /> || 
            currentStep === 3 && <Step3Component />
          }
        </Col>
        <Col xs={12}>

        </Col>
      </Row>
    </>
  )
}

export default Stepper
