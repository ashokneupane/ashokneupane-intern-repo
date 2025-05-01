import {useState} from 'react';
function Counter(){
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count +1);
    }
return (
    <>
<button onClick={handleClick}>Click Me</button>
<p>You have click {count} times</p>
</>
);
}
export default Counter;
