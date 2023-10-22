import React, { forwardRef } from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import InputOption from './InputOption'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import ShareIcon from '@mui/icons-material/Share';

const Post = forwardRef(({name,description,message,photoURL},ref) => {
    const randomNum = Math.floor(Math.random() * 1000);;
  return (
    <div ref={ref} className='post'>
        <div className="post_header">
        <Avatar className='post_avatar' src={photoURL}>{name[0]}</Avatar>
            <div className="post_info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>

        <div className="post_body">
            <p>{message}</p>
            <img src={`https://picsum.photos/id/${randomNum}/650/400`} alt="" />
        </div>

        <div className="post_buttons">
            <InputOption Icon={ThumbUpOffAltIcon} title='Like' color='gray'/>
            <InputOption Icon={CommentIcon} title='Comment' color='gray'/>
            <InputOption Icon={ShareIcon} title='Share' color='gray'/>
            <InputOption Icon={SendIcon} title='Send' color='gray'/>
        </div>
    </div>
  )
})

export default Post