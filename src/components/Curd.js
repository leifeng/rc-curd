import React, { Component, PropTypes } from 'react';
import styles from './Curd.css';
import THead from './THead';
import TBody from './TBody'
import Popup from './Popup'
import Form from './Form'
class Curd extends Component {
    static propTypes = {
        dataSource: PropTypes.array,
        colunms: PropTypes.array,
        deleted: PropTypes.func,
        update: PropTypes.func,
        create: PropTypes.func
    }
    static defaultProps = {
        deleted: null,
        update: null,
        create: null,
        colunms: [],
        dataSource: []
    }
    constructor() {
        super();
        this.state = {
            visible: false,
            title: '',
            isEdit: false,
            item: null
        }
    }
    render() {
        const { create, deleted, update, colunms, dataSource } = this.props;
        const { visible, title, item } = this.state;
        return (
            <div>
                <table className={styles.normal}>
                    <THead colunms={colunms} hasAction={!!(deleted || update)} />
                    <TBody colunms={colunms}
                        dataSource={dataSource}
                        deleted={!!deleted}
                        update={!!update}
                        onVisibleChange={this.onVisibleChange}
                        onIsEditChange={this.onIsEditChange}
                        onItemChange={this.onItemChange} />
                </table>
                <Popup
                    title={title}
                    visible={visible}
                    onVisibleChange={this.onVisibleChange}
                    onSubmit={this.onSubmit}>
                    <Form data={item} colunms={colunms} onSetFields={this.onSetFields} onSubmit={this.onSubmit} />
                </Popup>
            </div>
        )
    }
    //修改弹出层visible
    onVisibleChange = (visible) => {
        this.setState({ visible })
    }
    //修改标题
    onIsEditChange = (title, isEdit) => {
        this.setState({ title, isEdit })
    }
    //item
    onItemChange = (item) => {
        this.setState({ item }, () => {
            console.log('onItemChange', this.state.item)
        })
    }
    onSetFields = (field, value) => {
        const newState = {};
        newState[field] = value
        this.setState({
            item: { ...this.state.item, ...newState }
        }, () => {
            console.log('onSetFields', this.state.item)
        })

    }
    //点击确认按钮
    onSubmit = (e) => {
        // console.log(e)
        // e.preventDefault();
        const { item, isEdit } = this.state;
        if (isEdit) {
            this.props.update(item)
        } else {
            this.props.create(item)
        }
    }
}

export default Curd