import react, { useState, useEffect, use } from 'react';

const search = () => {
    const[input,SetInput]=useState("")
    const [data, SetData] = useState([])
    const [Loading, SetLoading] = useState(true)
    
    useEffect(() => {
        fetch("https://dummyjson.com/recipes")
          .then((response) => response.json())
            .then((data) => {
                SetData(data),
                SetLoading(false)
          })
          .catch((error) => {
            console.log("error", error);
          });
    }, [])
    
    useEffect(()=>{ },[input])
    if(Loading)return<h1>Loading....</h1>

    return (
      <>
        <h1>searchbar </h1>
        <label>Search here : </label>
        <input
          type="text"
          placeholder="search.."
          value={input}
          onChange={(e) => {
            SetInput(e.target.value);
          }}
        />
        <p>this is the {SetData} </p>

        <div>
          
            {data.map((d) => <span key={d.id}>{d.title}</span>)}
          
        </div>
      </>
    );
}
export default search;