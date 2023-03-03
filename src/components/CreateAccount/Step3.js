import { useEffect } from 'react';
import { useOutletContext } from "react-router-dom";
import BackToLink from '../common/BackToLink'

const Step3 = () => {
  const [changeStepHandler] = useOutletContext();
  
  useEffect(() => {
    console.log("Me actualice")
    changeStepHandler(3)
  });

  return (
    <div>
      Paso 3
      <BackToLink reditectTo={'/create-account/step-1'}/>
    </div>
  )
}

export default Step3
