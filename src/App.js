import { Col, Row } from 'react-bootstrap';
import './App.css';
import TopBar from './components/layout/TopBar';
import Router from './Routes';
import { Provider } from 'react-redux';
import {store, persistor} from './store/store';

import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <nav>
            <TopBar />
        </nav>
        <Row className='app-row-main-container justify-content-sm-center m-0'>
          <Col xs='12' className='app-col-router-container p-0'>
              <Router />
          </Col>
        </Row>
      </PersistGate>
    </Provider>
  );
}

export default App;
