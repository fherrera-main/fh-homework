import { InputGroup, Form } from 'react-bootstrap';
import PropTypes from "prop-types";
import styles from "./Input.module.css";

const Input = (props) => {
  const icons = [
    {
      iconTitle: 'eye',
      svg : <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.3636 6.50002C13.3636 7.28361 13.0284 8.03511 12.4317 8.5892C11.835 9.14328 11.0257 9.45456 10.1818 9.45456C9.33795 9.45456 8.52864 9.14328 7.93193 8.5892C7.33523 8.03511 7 7.28361 7 6.50002C7 5.71642 7.33523 4.96492 7.93193 4.41084C8.52864 3.85675 9.33795 3.54547 10.1818 3.54547C11.0257 3.54547 11.835 3.85675 12.4317 4.41084C13.0284 4.96492 13.3636 5.71642 13.3636 6.50002Z" fill={props.IconColor}/>
      <path d="M0 6.5C0 6.5 3.81818 0 10.1818 0C16.5455 0 20.3636 6.5 20.3636 6.5C20.3636 6.5 16.5455 13 10.1818 13C3.81818 13 0 6.5 0 6.5ZM10.1818 10.6364C11.3632 10.6364 12.4963 10.2006 13.3317 9.42485C14.167 8.64913 14.6364 7.59703 14.6364 6.5C14.6364 5.40297 14.167 4.35087 13.3317 3.57515C12.4963 2.79943 11.3632 2.36364 10.1818 2.36364C9.0004 2.36364 7.86737 2.79943 7.03198 3.57515C6.19659 4.35087 5.72727 5.40297 5.72727 6.5C5.72727 7.59703 6.19659 8.64913 7.03198 9.42485C7.86737 10.2006 9.0004 10.6364 10.1818 10.6364Z" fill={props.IconColor}/>
      </svg>
    }
  ]

  const setIcon = () =>{
    const iconResult = icons.find(icon => icon.iconTitle === props.IconName)
    return iconResult ? iconResult.svg : 'No Logo';
  }

  return (
    <div className={styles.inputContainer}>
      <Form.Label htmlFor={styles.label} className={styles.label}>{props.LabelText}</Form.Label>
      <InputGroup id={styles.label} className={'mb-3 '+ styles.inputGroup}>
        {props.LeftSection && <InputGroup.Text>$</InputGroup.Text>}
        <Form.Control type={props.InputType} name={props.inputName} onChange={props.handleChange} />
        {props.RightSection && <InputGroup.Text><span>{setIcon()}</span></InputGroup.Text>}
      </InputGroup>
    </div>
  )
}

Input.defaultProps = {
  LeftSection: true,
  RightSection: true,
  InputType: 'text',
  LabelText: 'Default Label'
}


export default Input