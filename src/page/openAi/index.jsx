import { useState } from "react";
import "./index.css";
import { Button, Form, Input, Space } from "antd";
const { TextArea } = Input;

const OpenAi = () => {
  // 消息队列
  const [chatList, setChatList] = useState([
    {
      role: "system",
      message: "OpenAi ~",
    },
  ]);
  const [isLoad,setIsLoad] = useState(false)
  const addChatList = (data) => {
    const list = JSON.parse(JSON.stringify(chatList))
    console.log("111",list)
    setChatList([...list, data]);
    if(data.role === "user") {
      setIsLoad(true)
    }
  };

  // 表单
  const [valForm] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
    if (values.content) {
      addChatList({
        role: "user",
        message: values.content,
      });
    }
  };
  const onReset = () => {
    valForm.resetFields();
  };

  return (
    <div>
      <div className="title">GPT-3.*</div>
      <div style={{ display: "flex" }}>
        <div className="boxLeft">
          {chatList.map((item,index) =>
            item.role === "system" ? (
              <div key={index}>
                <img
                  className="imgwh"
                  src="https://cps-static1.oss-cn-guangzhou.aliyuncs.com/zfbtyg/fz.png"
                  alt=""
                />
                {item.message}
              </div>
            ) : (
              <div key={index} className="userChat">
                {item.message}
                <img
                  className="imgwh"
                  src="https://cps-static1.oss-cn-guangzhou.aliyuncs.com/zfbtyg/fz.png"
                  alt=""
                />
              </div>
            )
          )}
          {isLoad ? (<div>Loading...</div>):''}
        </div>

        <div className="boxRight">
          <div className="r-item">
            <Form form={valForm} onFinish={onFinish}>
              <Form.Item name="content" label="">
                <TextArea placeholder="请输入内容" autoSize />
              </Form.Item>
              <Form.Item>
                <Space>
                  <Button
                    style={{ width: "150px" }}
                    type="primary"
                    htmlType="submit"
                  >
                    发送
                  </Button>
                  <Button htmlType="button" onClick={onReset}>
                    重置
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenAi;
