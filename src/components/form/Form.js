import React from 'react';
import FormType from './FormType';

const Form = (props) => {
    const { colunms, data, onSubmit, onSetFields } = props;
    return (
        <form onSubmit={onSubmit}>
            {colunms.map((item, index) => {
                const value = data && (data[item.field] || data[item.field] === 0) ? data[item.field] : ''

                const formTypeProps = {
                    type: item.formType,
                    field: item.field,
                    dic: item.dic || [],
                    onSetFields,
                }
                if (item.formType === 'CheckBox') {
                    formTypeProps['value'] = value || []

                } else {
                    formTypeProps['value'] = value
                }
                return (
                    <div key={index}>
                        <span>{item.name}</span>
                        <div>
                            <FormType {...formTypeProps} />
                        </div>
                    </div>
                )
            })}
        </form>
    )
}
export default Form;