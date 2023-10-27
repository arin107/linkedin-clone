import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption.js'
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import { Avatar } from '@mui/material'
import Post from './Post.js'
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

const Feed = () => {
    const user=useSelector(selectUser);
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {
      db.collection("posts").orderBy('timestamp','desc').onSnapshot(snapshot =>{
        setPosts(snapshot.docs.map(doc=>({
            id: doc.id,
            data: doc.data(),
        })))
      })
    }, [])


    const sendPost=(e)=>{
        e.preventDefault();
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoURL: user.photoURL||'',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput("");
    }

  return (
    <div className='feed'>
        <div className="feed_inputcontainer">
            <div className="feed_search">
            <Avatar className='feed_avatar' src={user.photoURL}>{user.displayName[0]}</Avatar>
            <div className="feed_input">
                <CreateIcon/>
                <form action="">
                    <input value={input} onChange={e=>setInput(e.target.value)} type="text" placeholder='Start a post'/>
                    <button onClick={sendPost}>Send</button>
                </form>
            </div>
            </div>
            <div className="feed_inputOptions">
                <InputOption title='Photo' Icon={ImageIcon} color='#70B5F9'/>
                <InputOption title='Video' Icon={SubscriptionsIcon} color='#E7A33E'/>
                <InputOption title='Event' Icon={EventNoteIcon} color='#C0CBCD'/>
                <InputOption title='Write&nbsp;article' Icon={CalendarViewDayIcon} color='#7FC15E'/>
            </div>
        </div>

        {/* Post  */}
        <FlipMove>
        {posts.map(({id, data: {name, description, message, photoURL}})=>(
            <Post 
                key={id}
                name={name}
                description={description}
                message={message}
                photoURL={photoURL}
            /> 
        ))}
        </FlipMove>
    </div>
  )
}

export default Feed