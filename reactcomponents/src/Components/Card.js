import logo from '../assets/utglogo.gif'
function Card(){
    return(
        <div className="card">
            <img className='card-img' src={logo} alt="logo"></img>
            <h1 className='card-title'>Ahmad</h1>
            <p className='card-text'>Hello Welcome Everyone</p>
        </div> 
    );
}
export default Card