import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './Popup.css'
class Popup extends PureComponent {
    static propTypes = {
        visible: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
        onVisibleChange: PropTypes.func.isRequired,
        footer: PropTypes.array,
        onSubmit: PropTypes.func.isRequired
    }

    render() {
        const { title, visible, onVisibleChange, footer, onSubmit, children } = this.props;
        return (
            <div className={styles.normal} style={{ display: visible ? 'block' : 'none' }}>
                <div className={styles.mask} onClick={() => onVisibleChange(false, '')}></div>
                <div className={styles.popup}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.body}>
                        {children}
                    </div>
                    <div className={styles.footer}>
                        <a className={styles.cancel} onClick={() => onVisibleChange(false, '')}>取消</a>
                        <a className={styles.confirm} onClick={onSubmit}>确认</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Popup;