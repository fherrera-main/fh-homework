import { Col, Row } from 'react-bootstrap';
import './App.css';
import TopBar from './components/layout/TopBar';
import Router from './Routes';

function App() {
  return (
    <Row  className='app-row-main-container justify-content-sm-center m-0'>
      <Col xs='12' className='app-col-main-container p-0'>
      { 
        validar() && <nav><TopBar /></nav>
      }
      </Col>
      <Col xs='12' className='app-col-router-container p-0'>
        <Router />
      </Col>
    </Row>
  );
}

export default App;