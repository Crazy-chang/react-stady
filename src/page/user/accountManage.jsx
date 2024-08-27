import { Button, Table, Space, Form, Input, Select } from "antd";
import { useEffect, useState } from "react";
import Popup from "./popup";

import {
  addAccountAdmin,
  accountAdminList,
  deleteAccountAdmin,
  editAccountAdmin,
  stopAccountAdmin,
} from "../../apis/tygApi";

const { Option } = Select;

const UserList = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("查询", values);
    getData();
  };
  const onReset = () => {
    form.resetFields();
  };

  const columns = [
    {
      title: "序号",
      dataIndex: "index",
      render: (text, record, index) => {
        // console.log('index',text, record, index)
        return (index + 1).toString();
      },
    },
    {
      title: "使用人",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "账号",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "状态",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "关联角色",
      dataIndex: "accountRoleName",
      key: "accountRoleName",
    },
    {
      title: "创建时间",
      dataIndex: "createTime",
      key: "createTime",
    },
    {
      title: "操作",
      key: "action",
      render: (_, row) => {
        return (
          <Space>
            <Button type="text" onClick={() => handlePopup("ture", row)}>
              详情
            </Button>
            <Button onClick={() => handlePopup("ture", row)}>编辑</Button>
            <Button type="primary" onClick={() => deletePopup("ture", row)}>
              删除
            </Button>
          </Space>
        );
      },
    },
  ];

  const [list, setList] = useState([]);

  const [popupStatus, setPopupStatus] = useState(false);
  const [items, setItems] = useState({});
  const handlePopup = (val = false, items = {}) => {
    console.log(items, "关闭", val);
    setPopupStatus(val);
    setItems(items);
  };
  const deletePopup = (val = false, items = {}) => {
    console.log(items, "删除", val);
    setPopupStatus(val);
    setItems({ name: "确定删除吗？", id: items.id, type: "delete" });
  };

  const getData = async () => {
    const res = await accountAdminList({});
    if (res.code == 0) {
      setList(res.data.records);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Form
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        layout={"inline"}
      >
        <Form.Item name="name" label="关键字">
          <Input />
        </Form.Item>
        <Form.Item name="status" label="状态">
          <Select
            placeholder="请选择"
            onChange={(value) => form.setFieldsValue({ status: value })}
            allowClear
          >
            <Option value="">全部</Option>
            <Option value="1">启用</Option>
            <Option value="2">停用</Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...{
            wrapperCol: {
              offset: 6,
              span: 30,
            },
          }}
        >
          <Space>
            <Button type="primary" htmlType="submit">
              查询
            </Button>
            <Button htmlType="button" onClick={onReset}>
              重置
            </Button>
          </Space>
        </Form.Item>
      </Form>
      <Table columns={columns} dataSource={list} />
      <Popup items={items} visible={popupStatus} handlePopup={handlePopup} />
    </div>
  );
};

export default UserList;
