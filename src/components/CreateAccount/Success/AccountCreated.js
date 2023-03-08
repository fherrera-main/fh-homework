import { Container, Row, Col } from 'react-bootstrap';
import styles from './AccountCreated.module.css';
import AccountCreatedSvgMobile from '../../../assets/account-created-mobile.svg'
import AccountCreatedSvgDesktop from '../../../assets/account-created-desktop.svg'
import Button from '../../common/Button';
import { useEffect } from 'react';
import { useOutletContext } from "react-router-dom";

const AccountCreated = () => {
  const [changeStepHandler] = useOutletContext();
  
  useEffect(() => {
    console.log("Me actualice")
    changeStepHandler(4)
  });


  return (
    <Container className={'pt-5 '+styles.ContainerToCenter}>
      <Row xs={12} className={'px-2 ' + styles.rowContainer}>
        <Col className='d-md-none' xs={12} >
          <h2>¡Cuenta creada!</h2>
        </Col>
        <Col xs={12} md={3} className="pt-3 text-center">
          <img className='d-md-none' src={AccountCreatedSvgMobile} />
          <img className='d-none d-md-block' src={AccountCreatedSvgDesktop} />
        </Col>
        <Col xs={12} md={6} className={styles.textContainer}>
          <Row>
            <Col xs={12} className={'d-none d-md-flex ' + styles.subtitleDesktop}>
              <h2>¡Cuenta creada!</h2>
            </Col>
            <Col xs={12} className={'pt-5 pt-md-4 pb-0 pr-0 ' + styles.textCol}>
              <p>Tu cuenta ha sido creada con éxito. Es momento de iniciar sesión.</p>
            </Col>
            <Col md={10} className='text-center pt-3'>
              <Button text='Ir a Login'/>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default AccountCreated
