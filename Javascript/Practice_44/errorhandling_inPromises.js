Promise.resolve(10)
    .then(x => x + 5)
    .then(y => { throw "Error!" })
    .then(z => console.log("won't run"))
    .catch(err => console.log('caught', err))
    .then(() => console.log('back normally'))

//.catch() handles the error and returns a normal resolved promise.So the chain continues.