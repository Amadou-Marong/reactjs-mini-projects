import React, { useState } from "react"

function MyComponent(){
    const [name, setName] = useState("Guest")
    const [age, setAge] = useState(0)
    const [isEmployed, setStatus] = useState(false)

    const updateName = () => {
        setName("Ahmad")
    }

    const incrementAge = () => {
        setAge(age + 1)
    }

    const toggleEmployedStatus = () => {
        setStatus(!isEmployed)
    }

    return( <div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set Name</button>
                
                <p>Age: {age}</p>
                <button onClick={incrementAge}>Increment Age</button>
                
                <p>Employed Status: {isEmployed ? "Yes" : "No"}</p>
                <button onClick={toggleEmployedStatus}>Toggle Status</button>
            </div>

    );
}
export default MyComponent