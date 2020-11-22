console.log("Fetch API");

async function getApi() {
    const api = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(api, "API");

    const json = await api.json();
    console.log(json);

}

// getApi();

async function postApi() {
    const apiPost = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Bootcamp-2020',
            body: 'JavaScript',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
    })
    console.log(apiPost, "API");
    const json1 = await apiPost.json();
    console.log(json1);
}

postApi();