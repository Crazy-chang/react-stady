import { useEffect, useState } from "react";
import axios from "axios";
function Home() {
  const [list, setList] = useState([]);
  const getData = () => {
    axios.get("/home/list").then((res) => {
      console.log("/home/list", res);
      setList(res.data.list);
    });
  };

  useEffect(() => {
    console.log("useEffect");
    getData();
  }, []);

  return (
    <div>
      <h4>循环</h4>
      {list.map((it) => (
        <p key={it.key}>{it.msg}</p>
      ))}
    </div>
  );
}

export default Home;
