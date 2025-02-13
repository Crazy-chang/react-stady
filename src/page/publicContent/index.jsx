import { Button, Card, Input, message, Row, Col } from "antd";
import React, { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";

const socket = io("ws://localhost:3000");

export default function PublicContent() {
  const userName = '王大爷';
  const [houseOwner, setHouseOwner] = useState(false);
  const [roomId, setRoomId] = useState("");
  const [roomUserList, setRoomUserList] = useState([]);
  const [joinRoomId, setJoinRoomId] = useState("");
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const chatContainerRef = useRef(null);

  useEffect(() => {
    console.log("socket=", socket);
    // socket.on("connect_error", (err) => {
    //   console.log("socket连接失败", err);
    // });
    socket.on("connect", () => {
      console.log("socket连接成功", socket.id);
    });
    socket.on("disconnect", () => {
      console.log("socket断开连接");
    });
    socket.on("message", (data) => {
      console.log("服务端message=");
      switch (data.type) {
        case "message":
          console.log("message=", data);
          setMessages(prevMessages => [...prevMessages, { user: data.userName, text: data.content }]);
          break;
        case "create":
          console.log("创建房间", data);
          setRoomId(data.roomId);
          setRoomUserList([{ userName: data.userName, userId: data.userId }]);
          message.success(`创建房间成功，房间号为：${data.roomId}`);
          break;
        case "join":
          console.log("加入房间", data);
          if (data.userName !== userName) {
            message.success(`${data.userName}加入房间`);
          }
          setRoomUserList(data.roomUserList);
          break;
        case "leave":
          message.success(`${data.userName}离开了房间`);
          setRoomUserList(data.roomUserList);
          console.log("离开房间", data);
          break;

        default:
          break;
      }
    });

  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);


  return (
    <div style={{ width: '99%' }}>
      <Row gutter={16} style={{ marginBottom: 16 }}>
        <Col>
          <Button onClick={() => {
            if (roomId) {
              message.error("已经在房间内");
              return;
            }
            socket.emit("joinRoom", { name: userName });
            setHouseOwner(true)
          }}>
            创建房间
          </Button>
        </Col>
        <Col>
          <Input
            placeholder="输入房间号"
            value={joinRoomId}
            onChange={(e) => setJoinRoomId(e.target.value)}
            style={{ width: 200, marginRight: 8 }}
          />
          <Button onClick={() => {
            if (roomId) {
              message.error("已经在房间内");
              return;
            }
            socket.emit("joinRoom", { room: joinRoomId, name: userName });
            setRoomId(joinRoomId)
          }}>
            加入房间
          </Button>
        </Col>
        {
          roomId ? (
            <Col>
              <Button onClick={() => {
                socket.emit("leaveRoom", { room: roomId, name: userName });
                setRoomId('')
                setNewMessage('')
                setRoomUserList([])
                setMessages([])
              }}>
                离开房间
              </Button>
            </Col>
          ) : ''
        }
      </Row>
      <Card>
        <div>
          <div>
            房间号：{roomId}
          </div>
          <div>
            房间人数：{roomUserList.length}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          房间所有人：
          {
            roomUserList.map((item, index) => {
              return (
                <div key={index}
                    style={{ backgroundColor: '#eee', padding: '2px 6px', marginRight: '10px', borderRadius: '6px', display: 'flex', alignItems: 'center' }}>
                  {item.userName}
                  {houseOwner && <span style={{ marginLeft: '4px', color: 'red' }}>👑</span>}
                </div>
              );
            })
          }
        </div>
      </Card>
      <Card title="聊天记录" style={{ marginTop: 16, height: 350 }}
        extra={<div style={{ display: 'flex' }}>
          <Input
            placeholder="输入消息"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            style={{ width: '260px' }}
          />
          <Button type="primary" onClick={() => {
            if (newMessage !== '' && roomId) {
              socket.emit("sendMessage", { room: roomId, name: userName, content: newMessage });
              setNewMessage("");
            }
          }}>
            发送
          </Button>
        </div>}
      >
        <div ref={chatContainerRef} style={{ height: '260px', overflowY: 'auto' }}>
          {messages.map((item, index) => (
            <div key={index} style={{ marginBottom: 8 }}>
              <Row justify={item.user === userName ? 'end' : 'start'}>
                <Col style={{ maxWidth: '80%' }}>
                  <div
                    style={{
                      backgroundColor: item.user === userName ? '#e6f7ff' : '#eee',
                      textAlign: item.user === userName ? 'right' : 'left',
                      padding: '5px 10px',
                      borderRadius: 10,
                      display: 'inline-block',
                    }}
                  >
                    {item.user === userName ? (
                      <>{item.text} <strong>:{item.user}</strong> </>
                    ) : (<><strong>{item.user}:</strong> {item.text}</>)
                    }
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
