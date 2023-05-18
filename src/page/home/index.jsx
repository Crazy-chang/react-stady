
import { useEffect, useState } from 'react';
import axios from 'axios';
function Home () {
    console.log("111")
    const [ list, setList ] = useState([])
    const getData = () => {
        axios
            .get('/home/list')
            .then((res) => {
                console.log("/home/list", res)
                setList(res.data.list)
            })
    };
    console.log("222")
    useEffect(() => {
        console.log("useEffect")
        getData()
    }, [])
    console.log("333")
    
    return (
        <div>
            <h4>循环</h4>
            {
               list.map(it => <p key={it.key}>{it.msg}</p>)
            }
        </div>
    )
}

export default Home;