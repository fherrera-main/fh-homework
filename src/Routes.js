import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Recovery from './pages/Recovery';
import PasswordRecoverySuccess from './pages/PasswordRecoverySuccess';
import PasswordRecoveryFailure from './pages/PasswordRecoveryFailure';

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/password-recovery' element={<Recovery />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/password-recovery/success' element={<PasswordRecoverySuccess />} />
                    <Route path='/password-recovery/failure' element={<PasswordRecoveryFailure/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router
