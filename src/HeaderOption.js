import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

const HeaderOption = ({avatar,Icons, title,onClick}) => {
  const user=useSelector(selectUser);

  return (
    <div onClick={onClick} className='headerOption'>
        {Icons && <Icons className='headerOption_icon'/>}
        {avatar && <Avatar className='headerOption_icon' src={user?.photoURL}>{user?.displayName[0]}</Avatar>}
        <h3 className='headerOption_title'>{title}</h3>
    </div>
  )
}

export default HeaderOption