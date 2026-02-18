// Props are read-only data that a parent component passes to a child component in React.

// PropTypes are used to check the type of props passed to a React component. -> good for debugging -> doesn't stop the application from running just issue a warning.-> good practice when using props but depreceated now

//Default props are fallback values used when a prop is NOT passed from the parent component. So if the parent forgets to send a prop → React uses the default value. defaultProps is now considered legacy for function components. Legacy means: old approach that is still supported, but not recommended for modern use.

// defaultProps → legacy
// Default parameters → modern

import PropTypes from 'prop-types'

// function Student(props){

//     return(
//         <div className = "student">
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//             <p>Student: {props.isStudent ? "Yes":"No"}</p>
//         </div>
//     );

// }

function Student({
    name = "Guest",
    age = 0,
    isStudent = false,
}) {

    return (
        <div className="student">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Student: {isStudent ? "Yes" : "No"}</p>
        </div>
    );

}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

// Student.defaultProps = {
//     name: "Guest",
//     age: 0,
//     isStudent: false,
// }

export default Student;