import { Modal } from "antd";
import React, { useState } from "react";

const Popup = (props) => {
  console.log("props=", props);

  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      handleCancel();
      setConfirmLoading(false);
    }, 600);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    props.handlePopup(false);
  };

  return (
    <>
      <Modal
        title="提示"
        open={props.visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okText="确认"
        cancelText="取消"
      >
        {props.items.type === "delete" ? <p>{props.items.name}</p> : "6"}
      </Modal>
    </>
  );
};

export default Popup;
