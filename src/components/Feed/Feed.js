import React, { useState, useEffect } from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import InputOption from '../InputOption/InputOption';
import ImageIcon from '@material-ui/icons/Image';
import VideocamIcon from '@material-ui/icons/Videocam';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from '../Post/Post';
import { db } from '../../firebase';
import firebase from 'firebase'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import FlipMove from 'react-flip-move';

function Feed() {
 const user = useSelector(selectUser)
 const [posts, setPosts] = useState([])
 const [input, setInput] = useState('')

 //push post data to database, order by time stamp
 useEffect(() => {
  db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
   setPosts(snapshot.docs.map(doc => (
    {
     id: doc.id,
     data: doc.data()
    }
   )))
  ))
 }, [])

 //different time zone ppl can share same time stamp
 const sendPost = e => {
  e.preventDefault()
  db.collection('posts').add({
   name: user.displayName,
   description: user.email,
   message: input,
   photoUrl: user.profileUrl || '',
   timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })

  setInput('')
 }



 return (
  <div className="feed">
   <div className="feed_inputContainer">

    <div className="feed__input">
     <CreateIcon />
     <form onClick={sendPost} type="submit">
      <input type="text" value={input} onChange={e => setInput(e.target.value)} />
      <button type="submit">Send</button>
     </form>
    </div>

    <div className="feed__inputOptions">
     <InputOption title="Photo" Icon={ImageIcon} color="#70b5f9" />
     <InputOption title="Video" Icon={VideocamIcon} color="#e7a33e" />
     <InputOption title="Event" Icon={EventNoteIcon} color="#c0cbcd" />
     <InputOption title="Write article" Icon={CalendarViewDayIcon} color="#7fc15e" />
    </div>
   </div>

   {/* posts with animation by flipmove  */}
   <FlipMove>
    {
     posts.map(({ id, data: { name, description, message, photoUrl } }) => (
      <Post
       key={id}
       name={name}
       description={description}
       message={message}
       photoUrl={photoUrl}
      />
     ))
    }
   </FlipMove>
  </div>
 )
}

export default Feed
