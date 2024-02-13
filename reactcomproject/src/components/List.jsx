function List(){
    // const fruits = [
    //     {id: 1, name: "orange", calories: 95}, 
    //     {id: 2, name: "mango", calories: 45}, 
    //     {id: 3, name: "apple", calories: 105}, 
    //     {id: 4, name: "banana", calories: 159}, 
    //     {id: 5, name: "pineapple", calories: 37}
    // ];

    // fruits.sort();
    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical Order
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // Reverse Alphabetical Order
    // fruits.sort((a, b) => a.calories - b.calories); // Numeric Order
    // fruits.sort((a, b) => b.calories - a.calories); // Reverse Numeric Order

    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    const HighCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    // const listItems = fruits.map(fruit => <li key={fruit.id}>
    //                                 {fruit.name}: &nbsp;
    //                                 <b>{fruit.calories}</b>
    //                             </li>);

    const listItems = HighCalFruits.map(HighCalFruit => <li key={HighCalFruit.id}>
                                    {HighCalFruit.name}: &nbsp;
                                    <b>{HighCalFruit.calories}</b>
                                </li>);

    return(<ol>{listItems}</ol>);
}
export default List