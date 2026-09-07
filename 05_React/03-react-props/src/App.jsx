import Student from './Student.jsx'

function App(){
  return(
    <>
      <Student name = "sonu" age = {50} isStudent = {true}></Student>

      <Student name = "motu" age = {5} isStudent = {false}/>

      <Student age = {25} isStudent = {false}/>

      <Student></Student>
    </>
  );
}

export default App