import React, { Component, PropTypes } from 'react';

class TBody extends Component {
    static propTypes = {
        dataSource: PropTypes.array,
        colunms: PropTypes.array,
        deleted: PropTypes.bool,
        update: PropTypes.bool,
        onVisibleChange: PropTypes.func,
        onIsEditChange: PropTypes.func,
        onItemChange: PropTypes.func
    }

    static defaultProps = {
        colunms: [],
        dataSource: [],
        deleted: false,
        update: false,
    }
    render() {
        const { dataSource, colunms, deleted, update } = this.props;
        return (
            <tbody>
                {dataSource.map((item, index) => {
                    return <tr key={index}>
                        {colunms.map((_item, _index) => {
                            if (_item.render) {
                                return <td key={_index}>{_item.render(item)}</td>
                            }
                            return <td key={_index}>{item[_item.field]}</td>
                        })}
                        <td>
                            {deleted ? <a onClick={this.deletedAction.bind(null, item)}>删除</a> : null}
                            {update ? <a onClick={this.updateAction.bind(null, item)}>编辑</a> : null}
                        </td>
                    </tr>
                })}
            </tbody>
        )
    }
    deletedAction = (item) => {
        this.props.deleted(item)
    }
    updateAction = (item) => {
        this.props.onVisibleChange(true)
        this.props.onIsEditChange('编辑', true)
        this.props.onItemChange(item);
    }
}
export default TBody;