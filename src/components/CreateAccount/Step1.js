import { useEffect } from 'react';
import { useOutletContext } from "react-router-dom";
import BackToLink from '../common/BackToLink'

const Step1 = ({setNewStep}) => {
  const [changeStepHandler] = useOutletContext();

  useEffect(() => {
    console.log("Me actualice")
    changeStepHandler(1)
  });
  
  return (
    <div>
      Paso 1
      <BackToLink text='Ir a paso 2' reditectTo={'/create-account/step-2'}/>
    </div>
  )
}

export default Step1
