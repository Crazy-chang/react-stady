import { Button, Table, Space } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import Popup from './popup';

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
            title: '操作',
            key: 'action',
            render: (_,row) => {
                return (
                    <Space>
                        <Link to={`/father/userDetail/detail/${row.age}`}>查看详情</Link>
                        <Button onClick={() => handlePopup('ture',row)}>弹窗</Button>
                    </Space>
                )
            }
        }
    ];

    const [list, setList] = useState([])

    const [popupStatus,setPopupStatus] = useState(false)
    const [items,setItems] = useState({})
    const handlePopup = (val = false,items = {}) => {
        console.log(items,"关闭==", val)
        setPopupStatus(val)
        setItems(items)
    }

    const getData = () => {
        axios
            .get('/user/list')
            .then((res) => {
                setList(res.data.list);
            })
    };

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <Table columns={columns} dataSource={list} />
            <Popup items={items} visible={popupStatus} handlePopup={handlePopup} />
        </div>
    )
}

export default UserList;