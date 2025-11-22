async function counter() {
    for (let i = 0; i <= 10; i++) {
        await new Promise((resolve) => {
            setTimeout(() => {
                console.log(i);
                resolve();
            }, 1000)
        })
    }
}


counter();