import React, { useState, useEffect } from 'react';

// create your App component here
function App () {
    const [dogUrl, setDogUrl] = useState("")
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp => resp.json())
        .then(data  => setDogUrl(data.message))
    }, [])

    return (
        <div>
            {!dogUrl ? <p>Loading...</p> : <img src={dogUrl} alt="A Random Dog"/>}
        </div>
    )
}
export default App