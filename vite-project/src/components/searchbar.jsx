import React, { useState, useEffect } from 'react';
import "./searchbar.css"

const Search = () => {
    const[input,SetInput]=useState("")
    const [data, SetData] = useState([])
    const [Loading, SetLoading] = useState(true)
    
    useEffect(() => {
        fetch(`https://dummyjson.com/recipes/search?q=${input}`)
          .then((response) => response.json())
          .then((data) => {
            SetData(data.recipes);
            SetLoading(false);
          })
          .catch((error) => {
            console.log("error", error);
          });
    }, [input])
    
    useEffect(()=>{ },[input])
    if(Loading)return<h1>Loading....</h1>

    return (
      <>
            <h1 className='se'>searchbar </h1>
        <label className='search'>Search here : </label>
        <input
          type="text"
          placeholder="search.."
          value={input}
          onChange={(e) => {
            SetInput(e.target.value);
          }}
        />

        <div className='LD'>
          {data.map((d) => (
             <span key={d.id}>{d.name}</span>

          ))}
        </div>
      </>
    );
}
export default Search;