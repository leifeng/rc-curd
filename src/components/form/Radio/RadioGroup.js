import React from 'react';
import PropTypes from 'prop-types';
import Component from '../Component';
import { toString } from '../../../utils'

const RadioGroup = (props) => {
    const { options, value, onChange } = props;
    const name = 'radio-group-' + new Date().getTime();
    return <div onChange={onChange}>
        {options.map((item, index) => {
            return <Component type="radio" value={item.value} checked={toString(item.value) === toString(value)} key={index} name={name}>{item.label}</Component>
        })}
    </div>
}
RadioGroup.propTypes = {
    value: PropTypes.any,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func
}
RadioGroup.defaultProps = {
    options: []
}
export default RadioGroup;