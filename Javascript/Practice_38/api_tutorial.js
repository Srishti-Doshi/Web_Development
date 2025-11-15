// Visit this link to access free APIs ->  https://free-apis.github.io/#/browse

// const URL = "https://cat-fact.herokuapp.com/facts";
const URL = "https://dog.ceo/api/breeds/image/random";

const btn = document.querySelector("#btn");
const dogImage = document.querySelector("#image");

// let promise = fetch(URL);
// console.log(promise);

//Data 

/*const getDogs = async ()=>{
    console.log("Getting data....");
    let response = await fetch(URL);
    // console.log(response);
    // console.log(response.status); //JSON format
    let data = await response.json();
    // console.log(data);
    // console.log(data.message);
    dogImage.src = data.message;
}*/



//Same work we did above using async/await can be done using promise chaining as shown below

/*function getDogs() {
    fetch(URL).then((response) => {
        return response.json();
    }).then((data) => {
        dogImage.src = data.message;
    });
}*/

function getDogs() {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            dogImage.src = data.message;
        });
}


// getDogs();
btn.addEventListener("click", getDogs);
