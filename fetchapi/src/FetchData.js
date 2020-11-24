import React, { useEffect, useState } from 'react'

export const FetchData = () => {

    const [todos, setTodos] = useState({});

    useEffect( async ()=> {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        console.log("Response =>", response);

        const data = await response.json();
        console.log("Data =>", data);
        setTodos(data);

    });

    return (
        <div>
            <h2>Title: {todos.title} </h2>
        </div>
    )
}
