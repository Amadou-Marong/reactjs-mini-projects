import { useState } from "react"
function Car(){
    const [cars, setCars] = useState([]);
    const [name, setName] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState(new Date().getFullYear());

    function handleNameChange(event){
        setName(event.target.value)
    }
    function handleModelChange(event){
        setModel(event.target.value)
    }
    function handleYearChange(event){
        setYear(event.target.value)
    }
    function handleAddCar(){
        const newCar = {name: name, model: model, year: year}

        setCars(c => [...c, newCar])

        setName("")
        setModel("")
        setYear(new Date().getFullYear())

    }
    function handleRemoveCar(index){
        setCars(c => c.filter((_, i) => i != index))
    }
    return(
        <>
            <div>
                <h1>List Of Car Objects</h1>
                <ul>
                    {cars.map((car, index) => 
                        <li key={index}>
                            {car.name} {car.model} {car.year} <button onClick={() => handleRemoveCar(index)}>Remove</button>
                        </li>
                    )}
                </ul>
                <input type="text" value={name} placeholder="Enter Car Name" onChange={handleNameChange}/><br />
                <input type="text" value={model} placeholder="Enter Car Model" onChange={handleModelChange}/><br />
                <input type="number" value={year} placeholder="Enter Car Year" onChange={handleYearChange}/><br />
                <button onClick={handleAddCar}>Add Car</button>
            </div>  
        </>
    );
    
}
export default Car
