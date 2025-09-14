import React, { useState, useEffect } from 'react';

const Search = () => {
    const[input,SetInput]=useState("")
    const [data, SetData] = useState([])
    const [Loading, SetLoading] = useState(true)
    
    useEffect(() => {
        fetch("https://dummyjson.com/recipes")
          .then((response) => response.json())
            .then((data) => {
                SetData(data.recipes);
                    SetLoading(false);
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

        <div>
          {data.map((d) => (
             <span key={d.id}>{d.name}</span>

          ))}
        </div>
      </>
    );
}
export default Search;