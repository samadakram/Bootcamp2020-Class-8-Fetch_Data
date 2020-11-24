import React, { useEffect, useState } from 'react'

export const FetchData = () => {

    const [todos, setTodos] = useState({});
    const [isFetching, setFetching] = useState(false);

    useEffect(() => {

        setFetching(true);

        async function processStart() {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            console.log("Response =>", response);

            const data = await response.json();
            console.log("Data =>", data);
            setTodos(data);
            setFetching(false);
        }

        processStart();

    });

    if(isFetching){
        return <div>Data Loading.... </div>
    }

    return (
        <div>
            <h2>Title: {todos.title} </h2>
        </div>
    )
}
