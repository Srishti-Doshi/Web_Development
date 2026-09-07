let inner = new Promise((resolve) => {
    resolve(20);
});

let outer = new Promise((resolve) => {
    resolve(inner)
})

/*If you pass a Promise into resolve(),
the outer Promise takes (adopts) the inner Promise’s state. */

outer.then((result) => {
    console.log(result);
})

/*If you pass a Promise object into resolve(),
the outer promise adopts the inner promise’s result.
Promise Adoption
If inner resolves → outer resolves with same value
If inner rejects → outer rejects with same error */


/*resolve(x) only waits if x is a Promise.
If x is not a Promise → resolve immediately. */