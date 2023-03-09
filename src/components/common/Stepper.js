import { Row, Col } from 'react-bootstrap';
import Step1 from '../../assets/stepper-step-1.svg';
import Step2 from '../../assets/stepper-step-2.svg';
import Step3 from '../../assets/stepper-step-3.svg';
import StepCompleted from '../../assets/stepper-completed.svg'
import styles from './Stepper.module.css';

const Stepper = ({ currentStep }) => {

  const stepsBehavior = [
    Step1,
    Step2,
    Step3,
    StepCompleted
  ]

  return (
    <>
      <Row>
        <Col className={'text-center pt-3 ' + styles.stepperCol} xs={12}>
            <img src={stepsBehavior[(currentStep-1)]}/>
        </Col>
      </Row>
    </>
  )
}

export default Stepper
