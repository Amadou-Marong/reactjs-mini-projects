import { useState } from "react"
function Form(){
    const [name, setName] = useState("Guest")
    const [quantity, setQuantity] = useState(1)
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState("")
    const [shipping, setShipping] = useState("Delivery")

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value)
    }

    const handleCommentChange = (event) => {
        setComment(event.target.value)
    }

    const handlePayment = (event) => {
        setPayment(event.target.value)
    }

    const handleShipping = (event) => {
        setShipping(event.target.value)
    }

    return (
        <>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>
            
            <input value={quantity} onChange={handleQuantityChange} type="number"/>
            <p>Quantity: {quantity}</p>
            
            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter Delivery Information"/>
            <p>Comment: {comment}</p>

            <select name="" id="" value={payment} onChange={handlePayment}>
                <option value="" disabled>Select Payment</option>
                <option value="Visa">Visa Card</option>
                <option value="Paypal">Paypal</option>
                <option value="Mastercard">Master Card</option>
                <option value="Debit">Debit Card</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pickup"
                checked={shipping === "Pickup"}
                onChange={handleShipping}/>
                Pickup
            </label><br />
            
            <label>
                <input type="radio" value="Delivery"
                checked={shipping === "Delivery"}
                onChange={handleShipping}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </>
    );
}
export default Form