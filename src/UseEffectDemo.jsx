import axios from "axios";
import react, { useState, useEffect } from "react";

const UseEffectDemo = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("API WAS CALLED");
      });
  }, []);

  return (
    <div>
      <h1>USE STATE DEMO</h1>
      <div>Hello {data}</div>
    </div>
  )
}

export default UseEffectDemo;