import BootstrapButton from 'react-bootstrap/Button';


const Button = ({text, onClick}) => {
    return (
      <BootstrapButton variant='outline-warning' onClick={onClick} >{text}</BootstrapButton>
    )
  }

export default Button