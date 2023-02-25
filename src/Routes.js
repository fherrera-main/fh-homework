import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Recovery from './pages/Recovery';
import PasswordRecoverySuccess from './pages/PasswordRecoverySuccess'

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/password-recovery' element={<Recovery />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/password-recovery/success' element={<PasswordRecoverySuccess />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router
