let txt = document.querySelector(".txt");

let arr = ["Initializing Hacking", "Reading your files", "Password files detected", "Sending all passwords and personal files to server", "Cleaning up"];

(async function hackerTerminal() {
    for (let i = 0; i < arr.length; i++) {
        await new Promise((resolve) => {
            setTimeout(() => {
                setTimeout(() => {
                    txt.innerHTML = arr[i];
                }, 1000);
                setTimeout(() => {
                    txt.innerHTML = arr[i] + ".";
                }, 2000);
                setTimeout(() => {
                    txt.innerHTML = arr[i] + ". .";
                }, 3000);
                setTimeout(() => {
                    txt.innerHTML = arr[i] + "..";
                }, 4000);
                setTimeout(() => {
                    txt.innerHTML = arr[i] + "...";
                }, 5000);

                resolve();
            }, 2000 * (Math.random() * 6) + 1)
        })
    }
})();

// (async function hackerTerminal() {
//     for (let i = 0; i < arr.length; i++) {
//         await new Promise((resolve) => {
//             setTimeout(() => {
//                 setTimeout(() => {
//                     txt.innerHTML = arr[i];
//                 }, 1000);
//                 setTimeout(() => {
//                     txt.innerHTML = arr[i] + ".";
//                 }, 2000);
//                 setTimeout(() => {
//                     txt.innerHTML = arr[i] + ". .";
//                 }, 3000);
//                 setTimeout(() => {
//                     txt.innerHTML = arr[i] + "..";
//                 }, 4000);
//                 setTimeout(() => {
//                     txt.innerHTML = arr[i] + "...";
//                 }, 5000);

//                 resolve();
//             }, 1000 * (Math.random() * 6) + 1)
//         })
//     }
// })();


// (async function Dynamic_msgs() {
//     for (let i = 0; i < arr.length; i++) {
//         setTimeout(() => {
//             txt.innerHTML = arr[i];
//             setTimeout(() => {
//                 txt.innerHTML = arr[i] + ".";
//                 setTimeout(() => {
//                     txt.innerHTML = arr[i] + "..";
//                     setTimeout(() => {
//                         txt.innerHTML = arr[i] + "...";
//                     }, 1000)
//                 }, 2000)
//             }, 1000)
//         }, 2000 * (Math.random() * 6) + 1)
//     }
// })();
