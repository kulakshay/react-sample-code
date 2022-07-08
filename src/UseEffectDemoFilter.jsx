import axios from "axios";
import react, { useState, useEffect } from "react";

const UseEffectDemoFilter = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const filter = (data) => {
    const description = data.body;
    if(description.includes(query)) return true;
    return false;
  }
  const renderList = (data) => {
    const filterData = data.filter( d => filter(d));
    console.log('Filtered', filterData);
    return filterData.map( d => <li>{d.body}</li>)
  }
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
        console.log("API WAS CALLED");
      });
  }, [query]);

  return (
    <div>
      <h1>USE STATE DEMO</h1>
      {data && data.length > 0 && <div>Hello {data[0].email}</div>}
      <input onChange={ (e) => setQuery(e.target.value)}></input>
      <ul>
        {
          data && data.length > 0 && renderList(data)
        }
      </ul>
    </div>
  )
}

export default UseEffectDemoFilter;