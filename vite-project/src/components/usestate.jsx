import react, { useState } from 'react';

const UseState = () => {

    const [name, SetName] = useState("JavaScript");


    return (
        <>
        <h1>i love {name}</h1>
            <button onClick={() => SetName("React")}>changename</button>
        </>
    )
}
export default UseState;