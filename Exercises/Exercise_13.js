// views -> integer , 727000 -> 727k , 7270000 -> 727M
// duration -> string

function createCard(title, cName, views, monthsOld, duration, thumbnail){
    let viewstr;
    if(views <1000)
    {
        viewstr = views;
    }
    else if(views > 1000000)
    {
        viewstr = views/1000000 + "M";
    }
    else{
        viewstr = views/1000 + "K";
    }
    let html = `<div class="container">
        <div class="card">
            <div class="image">
                <img src="${thumbnail}"
                    alt="">
                <div class="capsule">${duration}</div>
            </div>

            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewstr} views . ${monthsOld} months ago</p>
            </div>
        </div>
    </div>`;

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;

}

createCard("Introduction to CSS | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "21:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");

createCard("Introduction to JavaScript | Sigma Web Dev video #3", "CodeWithHarry", 8600000000, 7, "51:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");