import List from './List.jsx'
import ListComponent from './ListComponent.jsx';
import ListObj from './ListObj.jsx'

function App() {

  const sweets = [
    { id: 1, name: "Gulab-jamun", calories: "apple" },
    { id: 2, name: "Jalebi", calories: 145 },
    { id: 3, name: "Rasugulla", calories: 105 },
    { id: 4, name: "KajuKatli", calories: 159 },
    { id: 5, name: "Rabri", calories: 137 },
  ]

  const vegetables = [
    // { id: 6, name: "potatoes", calories: 110 },
    // { id: 7, name: "celery", calories: 15 },
    // { id: 8, name: "carrots", calories: 25 },
    // { id: 9, name: "coen", calories: 63 },
    // { id: 10, name: "broccoli", calories: 50 },
  ]

  return (
    <>
      <List />
      <hr />
      <hr />
      <hr />
      <hr />
      <ListObj />
      <hr />
      <hr />
      <hr />
      <hr />

      {/* <ListComponent items={sweets} category="Sweets" /> */}

      {/* {sweets.length > 0 ? <ListComponent items={sweets} category="Sweets" /> : null} */}

      {sweets.length > 0 && <ListComponent items={sweets} category="Sweets" />}


      <hr />
      <hr />
      <hr />
      <hr />

      {/* <ListComponent items={vegetables} category="Vegetables" /> */}

      {vegetables.length > 0 ? <ListComponent items={vegetables} category="Vegetables" /> : null}

      {/* {vegetables.length > 0 && <ListComponent items={vegetables} category="Vegetables" />} */}

      {/* use default props/ default parameters (destructure props directly in the function parameter and assign default values there.)else if category , its value or items doesn't exist code may break */}

    </>
  );
}

export default App