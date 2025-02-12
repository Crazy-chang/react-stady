import { Button, Card, message } from "antd";
import React, { useEffect, useState } from "react";

import { io } from "socket.io-client"

const socket = io("ws://localhost:3000");

export default function PublicContent() {

  const [roomId, setRoomId] = useState("");
  const [roomUserList, setRoomUserList] = useState([]);

  useEffect(() => {
    console.log("socket=", socket);

    socket.on("connect", () => {
      console.log("socket连接成功", socket.id);
    });
    socket.on("message", (data) => {
      console.log("服务端message=");
      switch (data.type) {
        case "join":
          console.log("加入房间", data);
          message.success(`${data.userName}加入房间`)
          setRoomUserList([...roomUserList, { name: data.userName }])
          break;
        case "leave":
          message.success(`${data.userName}离开了房间`)
          setRoomUserList(roomUserList.filter(item => item.name !== data.userName))
          console.log("离开房间", data);
          break;
        case "roomUserNum":
          console.log("房间人数", data);
          break;
        default:
          break;
      }
    });

  }, []);

  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <Button onClick={() => {
          const roodDate = + new Date()
          setRoomId(roodDate)
          socket.emit("joinRoom", { room: roodDate, name: '王大爷' });
        }}>
          创建房间
        </Button>
        <Button onClick={() => {
          socket.emit("leaveRoom", { room: roomId, name: '王大爷' });
        }}>
          离开房间
        </Button>
      </div>
      <Card>
        <div>
          房间号：{roomId}
        </div>
        <div>
          房间人数：{roomUserList.length}
        </div>
        房间所有人：
        {
          roomUserList.map((item, index) => {
            return (
              <div key={index}>
                {item.name}
              </div>
            )
          })
        }
      </Card>
    </div>
  );
};
