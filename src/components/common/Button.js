import BootstrapButton from 'react-bootstrap/Button';
import styles from './Button.module.css';


const Button = ({text, onClick}) => {
    return (
      <BootstrapButton className={styles.button} variant='outline-light' onClick={onClick} >{text}</BootstrapButton>
    )
  }

export default Button