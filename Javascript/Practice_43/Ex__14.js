let txt = document.querySelector(".txt");

let arr = ["Initializing Hacking", "Reading your files", "Password files detected", "Sending all passwords and personal files to server", "Cleaning up"];

(async function hackerTerminal(){
    for (let i = 0; i < arr.length; i++) {
        let promise = await new Promise((resolve)=>{
            setTimeout(()=>{
                txt.innerHTML = arr[i];
                resolve();
            },1000*(Math.random()*6)+1)
        })
    }
})();