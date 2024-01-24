import PropTypes from 'prop-types'
function Greeting(props){
    // return(props.isLoggedIn ? 
    //             <p className="welcome-message">Welcome You are Logged in Successfully</p> 
    //             : <p className="login-prompt">Please Log in to Continue</p>);
    
    const welcomeMessage = <p className="welcome-message">
                                Welcome {props.name} You are Logged in Successfully
                            </p> 

    const loginPrompt = <p className="login-prompt">
                            Please Log in to Continue
                        </p> 

    return(props.isLoggedIn ? welcomeMessage : loginPrompt);
}

Greeting.PropTypes = {
    isLoggedIn: PropTypes.bool,
    name: PropTypes.string,
}

Greeting.defaultProps = {
    isLoggedIn: false,
    name: "Guest"
}

export default Greeting;