import React, { Component, PropTypes } from 'react';

class TBody extends Component {
    static propTypes = {
        dataSource: PropTypes.array,
        colunms: PropTypes.array,
        deleted: PropTypes.func,
        update: PropTypes.func,
    }

    static defaultProps = {
        colunms: [],
        dataSource: [],
        deleted() { },
        update() { },
    }
    constructor(){
        super();
        this.state={
            popupVisible:false
        }
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
                            {deleted ? <a onClick={() => deletedAction(item)}>删除</a> : null}
                            {update ? <a onClick={() => updateAction(item)}>编辑</a> : null}
                        </td>
                    </tr>
                })}
            </tbody>
        )
    }
    deletedAction() {

    }
    updateAction(){

    }
}
export default TBody;