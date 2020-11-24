// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))


// Get Data
  async function fetchData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      console.log("Response => ", response);

      const data = await response.json();
      console.log("JSON => ", data);
  }


  // Post Data

  async function postData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: "Post",
          body: JSON.stringify({
            title: 'My info',
            body: 'Data',
            userId: 1,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
      });

      console.log("Post response => ", response);

      const data = await response.json();
      console.log("Post Data => ", data );
  }

  fetchData();
  postData();