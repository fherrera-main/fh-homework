import {InputGroup, Form} from 'react-bootstrap';

const Input = () => {
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control aria-label="Amount (to the nearest dollar)" />
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>
    </>
  )
}

export default Input