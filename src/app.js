import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Curd from './index'
const curdProps = {
    create() {

    },
    deleted(item) {
        console.log(item)
    },
    update(item) {

    },
    colunms: [
        {
            name: '姓名',
            field: 'name'
        },
        {
            name: '年龄',
            field: 'age'
        },
        {
            name: '性别',
            field: 'sex'
        }
    ],
    dataSource: [
        {
            id: '1',
            age: 10,
            name: '张',
        },
        {
            id: '2',

            age: 20,
            name: '张2',
        }
    ]
}



const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component  {...curdProps} />
        </AppContainer>,
        document.getElementById('root')
    );
};

render(Curd);

if (module.hot) {
    module.hot.accept('./index', () => {
        render(Curd)
    });
}