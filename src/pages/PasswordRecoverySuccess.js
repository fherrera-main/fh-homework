import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from '../components/PasswordRecovery/Success/success.module.scss';

const PasswordRecoverySuccess = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} className={"mt-5 mb-5 p-0 " + styles.logoContainer}>
                    <p className={"m-0 " + styles.headerlogo}>
                        <span>
                            home <br /> work.
                        </span>
                    </p>
                </Col>
                <Col xs={12} className="px-5">
                    <h2>¡Todo listo!</h2>
                </Col>
                <Col xs={12} className="text-center">
                    <svg width="98" height="100" viewBox="0 0 98 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M97.7767 4.28569C98.2403 3.12501 97.9686 1.79933 97.086 0.915382C96.2035 0.0314368 94.8798 -0.24067 93.721 0.223601L2.94254 36.5914C-0.598553 38.01 -1.04956 42.8475 2.16804 44.8983L33.3367 64.7637L42.8922 79.8028C43.8174 81.2589 45.7459 81.6881 47.1997 80.7615C48.6535 79.8349 49.0821 77.9034 48.157 76.4474L39.5729 62.9372L86.3372 16.1003L74.5099 45.7145C73.8699 47.3169 74.6481 49.1356 76.2481 49.7766C77.8481 50.4176 79.6639 49.6381 80.3039 48.0357L97.7767 4.28569ZM81.9246 11.6809L35.1604 58.5178L8.08632 41.2621L81.9246 11.6809Z" fill="white" />
                        <path d="M97.9999 78.125C97.9999 90.2062 88.2214 100 76.1589 100C64.0964 100 54.3178 90.2062 54.3178 78.125C54.3178 66.0438 64.0964 56.25 76.1589 56.25C88.2214 56.25 97.9999 66.0438 97.9999 78.125ZM85.5646 67.6328C84.0869 66.7449 82.1703 67.2248 81.2837 68.7047L73.9793 80.8976L70.5648 77.4778C69.3463 76.2574 67.3707 76.2574 66.1522 77.4778C64.9337 78.6982 64.9337 80.6768 66.1522 81.8972L70.9796 86.7321C73.1326 88.8885 76.7358 88.4442 78.3023 85.8293L86.6348 71.9203C87.5213 70.4404 87.0422 68.5208 85.5646 67.6328Z" fill="white" />
                    </svg>
                </Col>
                <Col xs={12} className="mt-5 p-5 pr-0">
                    <p>Enviamos un mail a la dirección xxxxxxx.ah14@gmail.com. Revisa tu bandeja de entrada.</p>
                    <span>
                        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8333 10C15.8333 10.3452 15.538 10.625 15.1736 10.625H7.53021L10.3623 13.3081C10.62 13.5521 10.62 13.9479 10.3623 14.1919C10.1047 14.436 9.68698 14.436 9.42934 14.1919L5.47101 10.4419C5.21337 10.1979 5.21337 9.80214 5.47101 9.55806L9.42934 5.80806C9.68698 5.56398 10.1047 5.56398 10.3623 5.80806C10.62 6.05214 10.62 6.44787 10.3623 6.69194L7.53021 9.375H15.1736C15.538 9.375 15.8333 9.65482 15.8333 10Z" fill="white" />
                        </svg>
                        <Link to="/login" className={'mt-5 ' + styles.backLink}>Volver al login</Link>
                    </span>
                </Col>
            </Row>
        </Container>
    )
}

export default PasswordRecoverySuccess
