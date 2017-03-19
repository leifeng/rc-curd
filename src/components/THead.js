import React, { Component, PropTypes } from 'react';

class THead extends Component {
    static propTypes = {
        colunms: PropTypes.array,
        hasAction: PropTypes.bool
    }
    
    static defaultProps = {
        colunms: [],
        hasAction: false
    }
    render() {
        const { colunms, hasAction } = this.props;
        return (
            <thead>
                <tr>
                    {colunms.map((item, index) => {
                        return <th key={index}>{item.name}</th>
                    })}
                    {hasAction ? <th>操作</th> : null}
                </tr>
            </thead>
        )
    }
}
export default THead;