function DefaultGreeting({isLoggedIn = false, username = "Guest"}){

    const welcomeMessage = 
        <h2 className="welcome-message">
            Welcome {username}
        </h2>

    const loginPrompt = 
        <h2 className="login-prompt">
            Please login to continue
        </h2>

    return (
        isLoggedIn ? welcomeMessage : loginPrompt
    );
}

export default DefaultGreeting