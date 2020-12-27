import './App.css';
import Header from './components/Header/Header';
import React, { useEffect } from 'react';
import SideBar from './components/SideBar/SiderBar';
import Feed from './components/Feed/Feed';
import { selectUser, login, logout } from './features/userSlice'
import Login from './components/Login/Login';
import { useSelector } from 'react-redux'
import { auth } from './firebase'
import { useDispatch } from 'react-redux'



function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user is login 
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL
        }))
      } else {
        //user logout
        dispatch(logout())
      }
    })
  })

  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* app body */}
      {
        !user ? <Login /> : (
          <div className="app__body">
            <SideBar />
            <Feed />
          </div>
        )}
    </div>
  );
}

export default App;
