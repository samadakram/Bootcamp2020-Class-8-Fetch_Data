console.log("Fetch API");

async function getApi(){
    const api = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(api, "API");

    const json = await api.json();
    console.log(json);

}

getApi();
