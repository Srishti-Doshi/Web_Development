function ListObj() {

    //array of objects
    const juices = [
        { id: 1, name: "Apple", calories: 95 },
        { id: 2, name: "Orange", calories: 45 },
        { id: 3, name: "Banana", calories: 105 },
        { id: 4, name: "Coconut", calories: 159 },
        { id: 5, name: "Pineapple", calories: 37 },
    ]

    //juices.sort((a,b)=> a.name.localeCompare(b.name)); //Alphabetical
    // juices.sort((a,b)=> b.name.localeCompare(a.name)); //Reverse Alphabetical
    // juices.sort((a,b)=> a.calories - b.calories); //Numeric
    // juices.sort((a,b)=> b.calories - a.calories); //Reverse Numeric

    //All Juices
    const juiceItems = juices.map(juice =>
        <li key={juice.id}>
            {juice.name}: &nbsp;<b>{juice.calories}</b>
        </li>
    )


    // Low calorie (<100)
    const lowCalJuices = juices.filter(juice => juice.calories < 100);

    const juiceItemsLC = lowCalJuices.map(lowCalJuice =>
        <li key={lowCalJuice.id}>
            {lowCalJuice.name}: &nbsp;
            <b>{lowCalJuice.calories}</b>
        </li>
    )

    // High calorie (>=100)
    const highCalJuices = juices.filter(juice => juice.calories >= 100);

    const juiceItemsHC = highCalJuices.map(highCalJuice =>
        <li key={highCalJuice.id}>
            {highCalJuice.name}: &nbsp;
            <b>{highCalJuice.calories}</b>
        </li>
    )

    return (
        <>
            <h2>All Juices:</h2>
            <ul>{juiceItems}</ul>

            <h2>Low Calorie Juices:</h2>
            <ol>{juiceItemsLC}</ol>

            <h2>High Calorie Juices:</h2>
            <ol>{juiceItemsHC}</ol>
        </>
    );
}

export default ListObj;