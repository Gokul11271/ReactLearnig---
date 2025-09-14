import react, { useState, useffect } from 'react';

const search = () => {

    const [data, SetData] = useState([])
    const [Loading, SetLoading] = useState(true)
    
    

    return (
        <>
            <h1>searchbar</h1>
            <label>Searchhere : </label>
            <input type="text" placeholder="search.." />
            
        </>
    )
}
export default search;