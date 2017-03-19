import React, { Component ,PropTypes} from 'react';
import THead from './THead';
import TBody from './TBody'
import Popup from './Popup'
class Curd extends Component {
    static propTypes = {
        dataSource: PropTypes.array,
        colunms: PropTypes.array,
        deleted: PropTypes.func,
        update: PropTypes.func,
    }
    static defaultProps = {
        deleted: null,
        update: null,
        colunms: [],
        dataSource: []
    }

    render() {
        const { create, deleted, update, colunms, dataSource } = this.props;
        return (
            <div>
                <table>
                    <THead colunms={colunms} hasAction={!!(deleted || update)} />
                    <TBody colunms={colunms} dataSource={dataSource} deleted={deleted} update={update} />
                </table>
                <Popup/>
            </div>
        )
    }


}

export default Curd