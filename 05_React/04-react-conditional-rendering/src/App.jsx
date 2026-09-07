// conditional rendering = allows you to control what gets rendered in your applications based on certain conditions (show, hide, or change components)

// Conditional rendering means showing different UI based on a condition in React.

import UserGreeting from "./UserGreeting.jsx";
import DefaultGreeting from "./DefaultGreeting.jsx";

function App(){
  return(
    <>
      <UserGreeting isLoggedIn = {false} username ="Tinka"></UserGreeting>
      <hr />
      <UserGreeting isLoggedIn = {true} username ="Sonu"></UserGreeting>
      <hr />
      <UserGreeting isLoggedIn = {true}></UserGreeting>
      <hr />
      <DefaultGreeting isLoggedIn = {true}></DefaultGreeting>
    </>
  );
}

export default App