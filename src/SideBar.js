import React from 'react'
import './SideBar.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

const SideBar = () => {
    const user=useSelector(selectUser);

    const recentItem = (topic)=>{
        return(<div className='sidebar_recentItem'>
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>)
    }

  return (
    <div className='sidebar'>
        <div className="sidebar_top">
            <img src="https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
            <Avatar className='sidebar_avatar' src={user.photoURL}>{user.displayName[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h5>{user.email}</h5>
        </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed your profile</p>
                    <p className='sidebar_statNumber'>2,101</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views on post</p>
                    <p className='sidebar_statNumber'>1,989</p>
                </div>
            </div>

            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem("developer")}
                {recentItem("reactjs")}
                {recentItem("softwareengineering")}
                {recentItem("design")}
                {recentItem("programming")}
            </div>
    </div>
  )
}

export default SideBar