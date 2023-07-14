import { useState } from 'react'
import './App.css'

function App() {
  const [username , setUserName]=useState("");
  const [user,setUser] = useState(null);
  const [error,setError] =useState(null);


  const handleInputchange = (e)=>{
    setUserName(e.target.value);
    // console.log(username);
  }
const handleEvent =(event)=>{
  event.preventDefault();

  
   fetch(`https://api.github.com/users/${username}`)
   .then((response) => {
     if (response.ok) {
      return response.json();
     } else {
       throw new Error('User not found. Please enter a valid username.');
     }})
   .then((data)=>{
     setUser(data);
     setError(null);
    
   })
   .catch((error)=>{
     setUser(null)
     setError(error.message)
   })
}
  return (
    <div className='container'>
      <h1 className='hd1'>Github User Finder</h1> <br />
      <div className='headcontainer'>
        <form action="" onSubmit={handleEvent} >
          <input type="text" placeholder='Enter name' className='input1' onChange={handleInputchange} />
          <button className='btn' onClick={handleEvent} >Submit</button>
        </form>
        <div className='displaysxn'>
        {error && <p>{error}</p>}
      {user && (
        <div className='usercontainer'>
          <img src={user.avatar_url} alt={user.name} className='avatar' />
          <div className='dissxn'>
          <h3>{user.name}</h3>
          <h3>Followers: {user.followers}</h3>
          <h3>Bio: {user.bio}</h3>
          <h3>Location: {user.location}</h3>
          <h3>Public Repos:{user.public_repos}</h3>
          <h3>Following : {user.following}</h3>
          </div>
          
        </div>
      )}

        </div>

      </div>

    </div>
  )
}

export default App
