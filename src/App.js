import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Recovery from './pages/Recovery';

import PasswordRecoverySuccess from './pages/PasswordRecoverySuccess'
function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/password-recovery' element={<Recovery/>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/' element={<Home />}/>
          <Route path='/password-recovery/success' element={<PasswordRecoverySuccess/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
