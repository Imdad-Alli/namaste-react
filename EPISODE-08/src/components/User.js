import { useState } from "react";

const User = ({name, location, contact})=>{
    const [count, setCount] = useState(0);
    return (
        <div className="user-card">
            <h1>User Details</h1>
            <h2>count: {count}</h2>
            <button onClick={()=>{
                setCount(count+1);
            }}>increase count</button>
            <h4>Name: {name} (functional component)</h4>
            <h4>Location: {location} (functional component)</h4>
            <h4>contact: {contact} (functional component)</h4>
        </div>
    )
}
export default User;