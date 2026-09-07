import PropTypes from 'prop-types';

function UserGreeting(props) {

    // if (props.isLoggedIn) {
    //     return <h2>Welcome {props.username}</h2>
    // }
    // else {
    //     return <h2>Please Log In to continue..</h2> 
    // }



    // if (props.isLoggedIn) {
    //     return <h2>Welcome {props.username}</h2>
    // }
    // return <h2>Please Log In to continue..</h2> //else part



    // return (props.isLoggedIn ? <h2 className="welcome-message">Welcome {props.username}</h2> : <h2 className="login-prompt">Please log in to Continue</h2>);

    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>

    const loginPrompt = <h2 className="login-prompt">Please log in to Continue</h2>

    return(props.isLoggedIn ? welcomeMessage : loginPrompt);

}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

// defaultprops are now deprecated in React19 , so use parameters for default value 
// UserGreeting.defaultProps = {
//     isLoggedIn: false,
//     username: "Guest",
// }

export default UserGreeting