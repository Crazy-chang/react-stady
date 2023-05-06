
import { useEffect } from 'react';
import axios from 'axios'
function Home () {

    const getData = () => {
        axios
            .get('/user/list')
            .then((res) => {
                console.log("==", res)
            })
    };

    useEffect(() => {
        getData()
    }, [])
    
    return (
        <div>
            home
            
        </div>
    )
}

export default Home;