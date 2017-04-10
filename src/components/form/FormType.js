import React from 'react';

const FormType = (props) => {
    const { type, value, field, onSetFields, dic } = props;

    const onChange = (field) => {
        return (e) => {
            onSetFields(field, e.target.value)
        }
    }

    function renderItem() {
        switch (type) {
            case 'Input':
                return <input value={value} onChange={onChange(field)} />
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