function List(){
    const fruits = ["apple", "orange", "banana", "coconut"];
    
    fruits.sort(); //lexicographacally sorting -> not for numbers , works only for alphabets

    const listItems = fruits.map(fruit => <li>{fruit}</li>)

    // return(fruits);
    return(<ul>{listItems}</ul>);
}
export default List