import { useState } from "react";
function CarComponent(){
    const [car, setCar] = useState({name: "C-Class", model: "Benze", year: 2024})

    function handleNameChange(event){
        setCar(c => ({...c, name: event.target.value}))
    }
    function handleModelChange(event){
        setCar(c => ({...c, model: event.target.value}))
    }
    function handleYearChange(event){
        setCar(c => ({...c, year: event.target.value}))
    }
    return(
        <>
            <div>
                <p>Your Favourite Car is {car.name}, {car.model}, {car.year}</p>

                <input type="text" value={car.name} onChange={handleNameChange}/> <br />
                <input type="text" value={car.model} onChange={handleModelChange}/> <br />
                <input type="number" value={car.year} onChange={handleYearChange}/>
            </div>
        </>
    );
}
export default CarComponent