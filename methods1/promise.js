async function getProducts() {
    const promise = await fetch("https://....");
    // Promise... (pending, resolved, rejected)
    // derrière un fetch il y a un new promise.
    // fullfilled
    const data = promise.json();
}

//simulation d'un faut fetch
const fakefetch = new Promise(resolve, reject);
