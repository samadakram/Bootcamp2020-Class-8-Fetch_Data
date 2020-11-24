import React, { useEffect, useState } from 'react'

export const FetchData = () => {

    let data = {title: "Waiting for Network response"};

    const [todos, setTodos] = useState(data);
    const [isFetching, setFetching] = useState(false);

    useEffect(() => {

        
        async function processStart() {
            setFetching(true);
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            console.log("Response =>", response);

            const data2 = await response.json();
            console.log("Data =>", data2);
            setTodos(data2);
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
