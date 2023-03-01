import { Col, Row } from 'react-bootstrap';
import './App.css';
import TopBar from './components/layout/TopBar';
import Router from './Routes';

function App() {
  const validar = () => {
    console.log(localStorage.getItem('USER_DATA'));
    return localStorage.getItem('USER_DATA');
  }
  return (
    <Row  className='app-row-main-container justify-content-sm-center m-0'>
      <Col className='app-col-main-container'>
      { 
        validar() && <nav><TopBar /></nav>
      }
        <Router />
      </Col>
    </Row>
  );
}

export default App;
