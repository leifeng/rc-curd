import React, { Component, PropTypes } from 'react';
import FormType from './FormType';
class Form extends Component {
    render() {
        const { colunms } = this.props;
        const layout = {
            label: 3,
            from: 8
        }
        return (
            <form onSubmit={this.onSubmit} ref={(form) => this.form = form}>
                {colunms.map((item, index) => {
                    console.log(item)
                    return <FormType {...item} key={index}/>
                })}
            </form>
        )
    }
    onSubmit = (e) => {
        console.log(this.form[1].name);
        e.preventDefault();
    }
}
export default Form;