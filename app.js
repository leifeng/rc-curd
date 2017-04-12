import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Curd from './src/index'
const curdProps = {
    create(item) {
        console.log(item)
    },
    update(item) {
        console.log(item)
    },
    retrieve: {
        url: 'xxx',
        method: 'get'
    },
    deleted(item) {
        console.log(item)
    },
    colunms: [
        {
            name: '姓名',
            field: 'name',
            formType: 'Input'
        },
        {
            name: '年龄',
            field: 'age',
            formType: 'Input'
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
        },
        {
            name: '技能',
            field: 'skill',
            formType: 'CheckBox',
            dic: [{ label: '类别0', value: 0 }, { label: '类别1', value: 1 }, { label: '类别2', value: 2 }]
        }
    ],
    dataSource: [
        {
            id: '1',
            sex: 0,
            age: 10,
            name: '张',
            type: 1,
            skill: ['0', '1']
        },
        {
            id: '2',
            sex: 0,
            age: 20,
            name: '张2',
            type: 2,
            skill: ['1']
        },
        {
            id: 3,
            sex: 1,
            age: 10,
            name: '张3',
            type: 0,
            skill: ['1', '2']
        }
    ],
    isPage: {
        pageSize: 10,

    }
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