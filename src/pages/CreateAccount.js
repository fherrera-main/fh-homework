import { Outlet } from 'react-router-dom'
import leftArrow from '../assets/left-arrow.svg';

const CreateAccount = () => {
  return (
    <div>
    <h1 className='view-title'> <span><img src={leftArrow} /></span> Crear cuenta</h1>
      <Outlet></Outlet>
    </div>
  )
}

export default CreateAccount
