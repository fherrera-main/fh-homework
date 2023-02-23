import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Recovery from './pages/Recovery';

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/recovery' element={<Recovery/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<Home />}/>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
