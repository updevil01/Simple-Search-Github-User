import { useState } from "react"

const GitSearch = ({ onSearch }) => {
    const [username,SetUsername] = useState ('');
    const HandleInputChange = (e)=>{
        SetUsername(e.target.value);
    };

    const HandleSubmit = (e)=>{
        e.preventDefault();
        onSearch(username);
    }

    return (
        <form onSubmit={HandleSubmit}>
            <input 
            type="text"
            id="username"
            value={username}
            onChange={HandleInputChange}
            placeholder="Github username"
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default GitSearch;