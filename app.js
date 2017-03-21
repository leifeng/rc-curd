import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Curd from './src/index'
const curdProps = {
    create() {

    },
    deleted(item) {
        console.log(item)
    },
    update(item) {
        console.log(item)

    },
    colunms: [
        {
            name: '姓名',
            field: 'name',
            formType: 'Text'
        },
        {
            name: '年龄',
            field: 'age',
            formType: 'Text'
        },
        {
            name: '性别',
            field: 'sex',
            formType: 'Radio',
            dic: [{ label: '男', value: 1 }, { label: '女', value: 0 }]
        }, {
            name: '类别',
            field: 'type',
            formType: 'Select',
            dic: [{ label: '类别0', value: 0 }, { label: '类别1', value: 1 }, { label: '类别2', value: 2 }]
        }
    ],
    dataSource: [
        {
            id: '1',
            age: 10,
            name: '张',
            type:1
        },
        {
            id: '2',
            sex: 0,
            age: 20,
            name: '张2',
            type:2
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
    module.hot.accept('./src/index', () => {
        render(Curd)
    });
}