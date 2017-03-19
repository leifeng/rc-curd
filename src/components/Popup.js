import React, { Component, PropTypes } from 'react';
import styles from './Popup.css'
class Popup extends Component {
    static propTypes = {
        visible: PropTypes.bool
    }
    static defaultProps = {
        visible: false
    }

    render() {
        return (
            <div className={styles.normal}>
                
            </div>
        )
    }
}

export default Popup;