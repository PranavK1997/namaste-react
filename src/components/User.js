import { useState } from "react";

const User = (props) => {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);
    return <div className="user-card">
        <h3>Count = {count}</h3>
        <h3>Count = {count2}</h3>
        <h2>Name: {props.name}</h2>
        <h3>Location: Pune</h3>
        <h4>Contact: @pranav1997</h4>
    </div>
}

export default User;