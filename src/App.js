import React , {useState} from 'react'
import './App.css';
import Feed from './Feed';
import Login from './Login';
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import {auth } from './firebase'

function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  const signOut = () =>{
    auth.signOut()
    .then(() => {
      localStorage.removeItem('user');
      setUser(null);
    })
  }

  return (
    <div>
      {
        !user ?
        <Login setUser={setUser}/>
        :
       <div  className="app">
          <Sidebar signOut={signOut} />
          <Feed user={user} />
          <Widgets />
         </div>
        
      }
    </div>
  )
}

export default App;
