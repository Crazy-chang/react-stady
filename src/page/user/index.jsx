import { Table } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

const UserList = () => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags'
        },
        {
            title: '操作',
            key: 'action',
            render: (_) => (
                <Link to="/father/userDetail/detail">查看详情</Link>
            ),
        }
    ];

    const [list, setList] = useState([{
        key: '1',
        name: 'John Brown',
        age: 32,
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 321,
        tags: ['cool', 'teacher'],
    }])

    const getData = () => {
        axios
            .get('/user/list')
            .then((res) => {
                console.log("==", res)
                setList(res.data.list);
            })
    };

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <Table columns={columns} dataSource={list} />
        </div>
    )
}

export default UserList;