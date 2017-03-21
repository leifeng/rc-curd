import React from 'react';
import styles from './FormType.css'
const FormType = (props) => {
    const { name, field, dic, formType, value, onSetFields } = props;
    console.log('value', value)

    const onChange = (field) => {
        return (e) => {
            onSetFields(field, e.target.value)
        }
    }

    const renderForm = () => {
        switch (formType) {
            case 'Text':
                return <input type="text" value={value} onChange={onChange(field)} />
            case 'Radio':
                return dic.map((item, index) => {
                    return <label key={index}>
                        <input type="radio" checked={item.value == value} value={item.value} name={field} onChange={onChange(field)} />
                        {item.label}
                    </label>
                });
            case 'Select':
                return <select value={value} onChange={onChange(field)}>
                    {dic.map((item, index) => {
                        return <option value={item.value} key={index}>{item.label}</option>
                    })}
                </select>
            default:
                return null
        }
    }
    return <div className={styles.normal}>
        <div className={styles.label}><label>{name}</label></div>
        <div className={styles.form}>
            {renderForm()}
        </div>
    </div>
}
export default FormType;