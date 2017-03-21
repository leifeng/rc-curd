import React, { Component, PropTypes } from 'react';
import FormType from './FormType';
class Form extends Component {
    static defaultProps = {
        data: {},
        colunms: [],
        onSubmit() { },
        onSetFields() { }
    }
    static propTypes = {
        data: PropTypes.object,
        colunms: PropTypes.array,
        onSubmit: PropTypes.func,
        onSetFields: PropTypes.func
    }
    render() {
        const { data, colunms, onSubmit, onSetFields } = this.props;
        const layout = {
            label: 3,
            from: 8
        }
        return (
            <form onSubmit={onSubmit}>
                {colunms.map((item, index) => {
                    const value = data && data[item.field] || null
                    const formTypeProps = {
                        ...item,
                        key: index,
                        onSetFields
                    }
                    value && (formTypeProps['value'] = value)
                    return <FormType {...formTypeProps} />
                })}
            </form>
        )
    }
}
export default Form;