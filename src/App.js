import './App.css';
import TopBar from './components/layout/TopBar';
import Router from './Routes';

function App() {
  const validar = () => {
    console.log(localStorage.getItem('USER_DATA'));
    return localStorage.getItem('USER_DATA');
  }
  return (
    <>
      {validar() && <nav><TopBar /></nav>}
      <Router />
    </>
  );
}

export default App;
