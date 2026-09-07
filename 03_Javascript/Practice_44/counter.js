async function counter() {
    for (let index = 10; index >= 0; index--) {
        await new Promise((resolve) => {
            setTimeout(() => {

                console.log(index);
                resolve();
            }, 2000)
        })

    }
}

counter();