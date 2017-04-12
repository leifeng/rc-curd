import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Popup from './popup/Popup'
import Form from './form/Form';
import styles from './Curd.css';
import { toString } from '../utils'

export default class Curd extends Component {
    static propTypes = {
        colunms: PropTypes.array.isRequired,
        dataSource: PropTypes.array.isRequired,
        create: PropTypes.func,
        deleted: PropTypes.func,
        update: PropTypes.func
    }
    static defaultProps = {
        create: null,
        deleted: null,
        update: null
    }

    constructor() {
        super();
        this.state = {
            loading: false,
            popUpVisible: false,
            popTitle: '',
            dataItem: null,

        }
    }
    render() {
        const { colunms, dataSource, deleted, update, create } = this.props;
        const { popTitle, popUpVisible, dataItem } = this.state;
        return (
            <div className={styles.normal}>
                {typeof create === 'function' ? <a className={styles.add} onClick={() => this.popUpChange(true, '添加')}>添加</a> : null}
                <div>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                {colunms.map((item, index) => {
                                    return <th key={index} className={styles.th}>{item.name}</th>
                                })}
                                <th key="actions" className={styles.th}>{deleted || update ? "操作" : ""}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataSource.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        {colunms.map((o, i) => {
                                            if (o.render) {
                                                return o.render(item);
                                            }
                                            return <td key={i} className={styles.td}>{this.dic2value(o.dic, item[o.field])}</td>
                                        })}
                                        <td key="action" className={styles.td}>
                                            {typeof deleted === 'function' ? <a>删除</a> : null}
                                            {typeof update === 'function' ? <a onClick={() => { this.popUpChange(true, '编辑'); this.onItemChange(item) }}>编辑</a> : null}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <Popup
                    title={popTitle}
                    visible={popUpVisible}
                    onVisibleChange={this.popUpChange}
                    onSubmit={this.onSubmit}>

                    <Form data={dataItem} colunms={colunms} onSetFields={this.onSetFields} onSubmit={this.onSubmit} />
                </Popup>
            </div>
        )
    }

    dic2value = (dic, value) => {
        if (dic && dic.length > 0) {
            if (Object.prototype.toString.call(value) === "[object Array]") {
                return dic.filter(o => {
                    return value.indexOf(toString(o.value)) !== -1
                }).map((o) => o.label).join('')
            } else {
                if (value || value === 0) {
                    return dic.filter((o) => {
                        return o.value == value
                    })[0]['label']
                }
            }
        }
        return value

    }
    popUpChange = (visible, title = '') => {
        const newState = {};
        newState['popUpVisible'] = visible;
        newState['popTitle'] = title;
        if (!visible) {
            newState['dataItem'] = null;
        }
        this.setState(newState)
    }
    onItemChange(record) {
        this.setState({
            dataItem: record
        })
    }
    onSetFields = (field, value) => {
        const newState = {};
        newState[field] = value
        this.setState({
            dataItem: { ...this.state.dataItem, ...newState }
        })
    }
    onSubmit = (e) => {
        const { dataItem, popTitle } = this.state;
        if (popTitle === "编辑") {
            this.props.update(dataItem)
        } else {
            this.props.create(dataItem)
        }
    }
}