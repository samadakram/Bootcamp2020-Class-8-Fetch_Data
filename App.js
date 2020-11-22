console.log("Fetch API");

async function apiFetch(){
    const api = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(api, "API");

    const json = await api.json();
    console.log(json);

}

apiFetch();
