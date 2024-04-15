import React, { useEffect, useState } from "react";


const Test = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count])
    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <button onClick={handleClick}>Click me for +1</button>
            <h1>{count}</h1>
        </div>
    )
}

export default Test;