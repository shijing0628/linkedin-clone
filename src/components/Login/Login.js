import React, { useState } from 'react'
import './Login.css'
import { auth } from '../../firebase'
import { useDispatch } from 'react-redux'
import { login } from '../../features/userSlice'

function Login() {
 const [email, setEmail] = useState('')
 const [name, setName] = useState('')
 const [password, setPassword] = useState('')
 const [profilePic, setProfilePic] = useState('')
 const dispatch = useDispatch()


 //firebase auth
 const register = () => {
  if (!name) {
   return alert("Please enter a full name.")
  }

  auth.createUserWithEmailAndPassword(email, password)
   .then((userAuth) => {
    userAuth.user.updateProfile({
     displayName: name,
     photoURL: profilePic
    })
     .then(() => {
      dispatch(login({
       email: userAuth.user.email,
       uid: userAuth.user.uid,
       displayName: name,
       photoURL: profilePic
      }))
     })
   })
   .catch(err => alert(err))
 }


 const loginToApp = (e) => {
  e.preventDefault()
 }

 return (
  <div className="login">
   <img src="https://pbs.twimg.com/media/EPYO6xdU0AAUGnH.png" alt="linkin" />
   <form>
    <input
     type="text"
     placeholder="Full name (required if registering)"
     value={name}
     onChange={e => setName(e.target.value)} />

    <input
     type="text"
     placeholder="Profile pic URL (optional)"
     value={profilePic}
     onChange={e => setProfilePic(e.target.value)} />

    <input
     type="email"
     placeholder="abc@gmail.com"
     value={email}
     onChange={e => setEmail(e.target.value)} />

    <input
     type="password"
     placeholder="Password"
     value={password}
     onChange={e => setPassword(e.target.value)} />

    <button
     type="submit"
     onClick={loginToApp}>Sign In</button>
   </form>
   <p>Not a memeber? {" "}
    <span className="login__register" onClick={register}>Register Now</span>
   </p>
  </div>
 )
}

export default Login
