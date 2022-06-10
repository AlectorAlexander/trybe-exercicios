
const action = (a, b, c) => {
    const promise = new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
            return reject(new Error('Numbers only'))
        }
    const result = (a + b) * c;

    if (result < 50) {
        return reject(new Error('Valor baixo'))
    } 
    return resolve(result);
    }
    )
    return promise;
}

const a = Math.floor(Math.random() * 100 + 1);
const b = Math.floor(Math.random() * 100 + 1);
const c = Math.floor(Math.random() * 100 + 1);

action(a,b,c)
.then((resolve) => console.log(resolve))
.catch((error) => console.log(error.message));