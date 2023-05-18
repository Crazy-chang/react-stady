import { useParams, useHistory } from "react-router-dom"
import React, { useRef } from "react"
import { Button } from "antd"

const UserDetail = () => {
    const { id } = useParams()
    const History = useHistory()
    const demoRef = useRef('')
    console.log(demoRef)

    return (
        <div>   
            详情ID: { id }
            <div ref={demoRef}>
                <h3>获取dom元素</h3>
                <p>获取dom元素</p>
            </div>
            <Button onClick={() => History.goBack()}>返回</Button>
        </div>
    )
}

export default UserDetail;