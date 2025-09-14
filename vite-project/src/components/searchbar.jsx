import react, { useState, useffect } from 'react';

const search = () => {

    const [data, SetData] = useState([])
    const [Loading, SetLoading] = useState(true)
    
    useEffect(() => {
        fetch("")
            .then((response) => response.json())
            .then((data) => { 


            })
            .catch((error) => { console.log("error", error) });
    }, [])
    
    if(Loading)return<h1>Loading....</h1>

    return (
        <>
            <h1>searchbar</h1>
            <label>Searchhere : </label>
            <input type="text" placeholder="search.." />
            
        </>
    )
}
export default search;