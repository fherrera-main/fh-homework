import { useEffect } from 'react';
import { useOutletContext } from "react-router-dom";
import BackToLink from '../common/BackToLink'

const Step2 = () => {
  const [changeStepHandler] = useOutletContext();
  
  useEffect(() => {
    console.log("Me actualice")
    changeStepHandler(2)
  });

  return (
    <div>
      Paso 2
      <BackToLink text='Ir a paso 3' reditectTo={'/create-account/step-3'}/>
    </div>
  )
}

export default Step2
