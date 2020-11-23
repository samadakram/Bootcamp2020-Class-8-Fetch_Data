import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState({});

  useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => {
    setData(json)
  })
  }, [])

  return (
    <div className="App">
      Hello World from Abdul Samad! {data.title},
    </div>
  );
}

export default App;
