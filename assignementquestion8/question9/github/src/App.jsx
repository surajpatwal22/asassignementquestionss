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
        <div>
          <img src={user.avatar_url} alt={user.name} />
          <h2>{user.name}</h2>
          <p>Followers: {user.followers}</p>
          <p>Bio: {user.bio}</p>
          <p>Location: {user.location}</p>
        </div>
      )}

        </div>

      </div>

    </div>
  )
}

export default App
