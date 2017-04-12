import React from 'react';
import PropTypes from 'prop-types';
const Component = (props) => {
    const { value, name, children, checked, type } = props;
    const componentProps = {
        value,
        name,
        type,
        checked
    }
    return <label><input {...componentProps} />{children}</label>
}
Component.propTypes = {
    value: PropTypes.any,
    checked: PropTypes.bool,
    name: PropTypes.string,
    type: PropTypes.string
}
export default Component;