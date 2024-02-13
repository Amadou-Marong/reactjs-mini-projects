import { useState } from "react";

function Fruits(){
    const [fruits, setFruits] = useState(["Orange", "Mango", "Banana"])

    function handleAddFruit(){
        const newfruit = document.getElementById("newInput").value
        document.getElementById("newInput").value = ""

        setFruits(f => [...f, newfruit])
    }

    function handleRemoveFruit(index){
        // setFruits(fruits.filter((element, i) => i !== index))
        setFruits(fruits.filter((_, i) => i !== index))
    }
    return(
        <>
            <div>
                <h1>Fruits List</h1>

                <ul>{fruits.map((fruit, index) => 
                    <li key={index}>
                        {fruit}
                        <button onClick={() => handleRemoveFruit(index)}>Remove</button>
                    </li>)}
                </ul>
                <input type="text" id="newInput" placeholder="Enter New Fruit Name"/>
                <button onClick={handleAddFruit}>Add Fruit</button>
            </div>
        </>
    );
}
export default Fruits