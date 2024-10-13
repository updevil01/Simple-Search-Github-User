import './App.css';
import React,{useEffect, useState} from 'react'
import GitHubuser from './components/GitHubUser';
import GitSearch from './components/GitSearch';

function App () {
  const [userData,setUserData] = useState(null);
  const [error,setError] = useState(null);
  const fetchGitHubUser = async (username) => {
    setError(null);
    try {
      const response = await fetch(`http://localhost:5000/api/${username}`);
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
      } else {
        setError('User not found');
        setUserData(null);
      }
    } catch (err) {
      setError('Something went wrong');
      setUserData(null);
    }
  };
  useEffect(() => {
    document.title = "github search"; // ตั้งค่า title
}, []);
  return (
    
    <div className="App">
      <h1>GitHub User Search</h1>
      <GitSearch onSearch={fetchGitHubUser} />
      {error && <p>{error}</p>}
      <GitHubuser userData={userData} />
    </div>
  );
}




export default App;
