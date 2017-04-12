import React from 'react';
import RadioGroup from './Radio'
import CheckBoxGroup from './CheckBox'
const FormType = (props) => {
    const { type, value, field, onSetFields, dic } = props;

    const onChange = (field) => {
        return (e) => {
            onSetFields(field, e.target.value)
        }
    }
    const onCheckBoxChange = (field) => {
        return (value) => {
            onSetFields(field, value)
        }
    }
    function renderItem() {
        switch (type) {

            case 'Input':
                return <input value={value} onChange={onChange(field)} />
            case 'Radio':
                return <RadioGroup options={dic} value={value} onChange={onChange(field)} />
            case 'CheckBox':
                return <CheckBoxGroup options={dic} value={value} onChange={onCheckBoxChange(field)} />
            case 'Select':
                return <select value={value} onChange={onChange(field)}>
                    {dic.map((item, index) => {
                        return <option value={item.value} key={index}>{item.label}</option>
                    })}
                </select>
            default:
                return null;
        }
    }
    return (
        <div>
            {renderItem()}
        </div>
    )
}
export default FormType;