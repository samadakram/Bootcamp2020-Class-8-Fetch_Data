// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

  async function fetchData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      console.log("Response => ", response);

      const data = await response.json();
      console.log("JSON => ", data);
  }

  fetchData();