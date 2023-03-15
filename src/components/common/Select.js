import Form from 'react-bootstrap/Form';
import styles from './Select.module.css';

const Select = ({selectOptions, labelText, selectName, handleSelectChange, selectValue}) => {
    return (
        <div className={"inputContainer " + styles.selectContainer}>
            <Form.Label htmlFor={styles.label} className={styles.label}>{labelText}</Form.Label>
            <Form.Select name={selectName} onChange={handleSelectChange}>
                <option disabled>Selecciona tu {labelText.toLowerCase()}</option>
                {
                    selectOptions.map((el) => <option key={el.key} value={el.key}>{el.value}</option>)
                }
            </Form.Select>
        </div>
    )
}

Select.defaultProps = {
    selectOptions: [
        { key: 1, value: 'Valor 1'},
        { key: 2, value: 'Valor 2'},
        { key: 3, value: 'Valor 3'}
    ],
    labelText: 'Default Label'
}

export default Select
