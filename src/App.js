import { Col, Row } from 'react-bootstrap';
import './App.css';
import TopBar from './components/layout/TopBar';
import Router from './Routes';

function App() {

  return (
    <Row  className='app-row-main-container justify-content-sm-center m-0'>
      <Col className='app-col-main-container'>
        <nav>
          <TopBar />
        </nav>
        <Router />
      </Col>
    </Row>
  );
}

export default App;
