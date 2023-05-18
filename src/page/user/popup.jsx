import { Modal } from "antd";
import React, { useState } from 'react';

const Popup = (props) => {
    console.log("props=",props)

    const [confirmLoading, setConfirmLoading] = useState(false);
    
    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            handleCancel();
        setConfirmLoading(false);
        }, 600);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        props.handlePopup(false)
    };

    return (
        <>
            <Modal
                title="标题"
                open={props.visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                {props.items.name}
            </Modal>
        </>
    )
}

export default Popup;