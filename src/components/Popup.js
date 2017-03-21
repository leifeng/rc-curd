import React, { Component, PropTypes } from 'react';
import styles from './Popup.css'
class Popup extends Component {
    static propTypes = {
        visible: PropTypes.bool,
        title: PropTypes.string,
        onVisibleChange: PropTypes.func,
        footer: PropTypes.array,
        onSubmit: PropTypes.func
    }
    static defaultProps = {
        visible: false,
        title: '',
        footer: []
    }

    render() {
        const { title, visible, onVisibleChange, footer, onSubmit, children } = this.props;
        return (
            <div className={styles.normal} style={{ display: visible ? 'block' : 'none' }}>
                <div className={styles.mask} onClick={onVisibleChange.bind(null, false)}></div>
                <div className={styles.popup}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.body}>
                        {children}
                    </div>
                    <div className={styles.footer}>
                        <a className={styles.cancel} onClick={onVisibleChange.bind(null, false)}>取消</a>
                        <a className={styles.confirm} onClick={onSubmit}>确认</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Popup;