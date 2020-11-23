import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [repos, setRepos] = useState([{}]);

  useEffect(async () => {

    const response = await fetch("https://api.github.com/users/samadakram/repos");
    const data = await response.json();
    console.log(data);
    setRepos(data);

    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => {
    //     setData(json)
    //   })
  }, [])

  return (
    <div className="App">
      <ul>
        {repos.map((reposObj, index) => {
          return (
            <li key={index}>{ reposObj.name }</li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
