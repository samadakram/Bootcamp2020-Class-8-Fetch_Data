import React, { useEffect } from 'react'

export const FetchData = () => {

    useEffect( async ()=> {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        console.log("Response =>", response);

        const data = await response.json();
        console.log("Data =>", data);

    });

    return (
        <div>
            
        </div>
    )
}
