let todo = [];
let req = prompt("Enter your request");

while(true)
{
    if(req == "quit")
    {
        console.log("quitting app");
        break;
    }

    if(req == "add")
    {
        let task = prompt("Enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }
    else if(req == "list")
    {
        console.log("___________________");
        for(let i = 0; i < todo.length; i++)
        {
            console.log(i, todo[i]);
        }
        console.log("____________________");
    }
    else if(req == "delete")
    {
        let i = prompt("Enter task no. to be delete");
        todo.splice(i,1);
        console.log("task deleted");
    }
    else{
        console.log("invalid request");
    }

    req = prompt("Enter your request");

}
