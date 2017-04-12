import React from 'react';
import PropTypes from 'prop-types';
import Component from '../Component';
import { toString } from '../../../utils'

const CheckBoxGroup = (props) => {
    const { options, value, onChange } = props;
    const name = 'checked-group-' + new Date().getTime();
    const myChange = () => {
        const arr = [];
        const items = this.div.querySelectorAll('input');
        for (var item of items) {
            if (item.checked) {
                arr.push(toString(item.value))
            }
        }
        onChange(arr)
    }
    return <div onChange={myChange} ref={(div) => this.div = div}>
        {options.map((item, index) => {
            return <Component type="checkbox" value={item.value} checked={value.indexOf(toString(item.value)) !== -1} key={index} name={name}>{item.label}</Component>
        })}
    </div>
}
CheckBoxGroup.propTypes = {
    value: PropTypes.arrayOf(PropTypes.string),
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func
}
CheckBoxGroup.defaultProps = {
    options: [],
    value: []
}
export default CheckBoxGroup;