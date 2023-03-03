import './App.css';
import TopBar from './components/layout/TopBar';
import Router from './Routes';
import {useLocation} from 'react-router-dom';

function App() {
  return (
    <>
      <nav><TopBar /></nav>
      <Router />
    </>
  );
}

export default App;