import React from 'react';
import styles from './FormType.css'
const FormType = (props) => {
    const { layout, name, field, dic, formType } = props;
    console.log(formType,name,field)
    switch (formType) {

    }
    return <div className={styles.normal}>
        <div className={styles.label}><label></label></div>
        <div className={styles.form}></div>
    </div>
}
export default FormType;