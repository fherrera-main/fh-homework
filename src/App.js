import { Col, Row } from 'react-bootstrap';
import './App.css';
import TopBar from './components/layout/TopBar';
import Router from './Routes';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  const isLocationLogin = window.location.href.includes('/login');
  return (
    <Provider store={store}>
      <nav>
        {
          !isLocationLogin && <TopBar />
        }
      </nav>
      <Row className='app-row-main-container justify-content-sm-center m-0'>
        <Col xs='12' className='app-col-router-container p-0'>
            <Router />
        </Col>
      </Row>
    </Provider>
  );
}

export default App;
