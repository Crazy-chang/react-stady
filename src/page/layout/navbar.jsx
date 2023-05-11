import { Button} from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const navbar = () => {

    const closeTag = () => {
        console.log("关闭标签页")
    }

    const goToPage = () => {
        console.log("goToPage")
    }

    return(
        <div style={{background:'#ddd',padding:'5px'}}>
            <span style={{background:'#fff'}}><Button onClick={goToPage}>首页</Button><CloseOutlined onClick={closeTag} /></span>
            <Button>用户页</Button>
        </div>
    )
}

export default navbar;