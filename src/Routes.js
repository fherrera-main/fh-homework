import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Recovery from './pages/Recovery';
import PasswordRecoverySuccess from './pages/PasswordRecoverySuccess';
import PasswordRecoveryFailure from './pages/PasswordRecoveryFailure';
import CreateAccount from './pages/CreateAccount';
import Step1 from './components/CreateAccount/Step1';
import Step2 from './components/CreateAccount/Step2';
import Step3 from './components/CreateAccount/Step3';
import AccountCreated from './components/CreateAccount/Success/AccountCreated';

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
                    <Route path='/create-account/' element={<CreateAccount/>}>  
                        <Route path='/create-account/step-1' element={<Step1/>}/>
                        <Route path='/create-account/step-2' element={<Step2/>}/>
                        <Route path='/create-account/step-3' element={<Step3/>}/>
                        <Route path='/create-account/success' element={<AccountCreated/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router
