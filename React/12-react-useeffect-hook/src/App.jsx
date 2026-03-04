/* What is a React Hook?

Before Hooks, only class components could:
      Store state
      Use lifecycle methods
      Handle side effects

After Hooks were introduced (React 16.8), we can do all of this inside functional components.
A React Hook is a special function in React that lets you use features like state, lifecycle, and context inside functional components.

What is useEffect()?
useEffect() tells React:👉 “Run this code when something happens.”

That “something” can be:
      Component loads (mounts)
      Component updates (re-renders)
      A specific state/prop changes
      Component removes (unmounts)

useEffect(function, [dependencies])
function → Code you want to run
[dependencies] → When should it run?


useEffect() is a React Hook that runs side-effect code in a component:

🔁 After every re-render → useEffect(() => {})

🎬 Only once (on mount) → useEffect(() => {}, [])

🔄 On mount + when a value changes → useEffect(() => {}, [value])

🧹 Can also clean up when component unmounts


Mounting => adding a component from DOM

Unmounting => removing a component from DOM

*/

import MyComponent from "./MyComponent.jsx";
import MyComponent2 from "./MyComponent2.jsx";

function App(){
      return (
            <>
                  <MyComponent/>
                  <MyComponent2/>          
            </>
      );
}

export default App