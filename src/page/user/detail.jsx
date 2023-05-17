import { useParams } from "react-router-dom"

const UserDetail = () => {
    const { id } = useParams()

    return (
        <div>详情页面 { id }</div>
    )
}

export default UserDetail;