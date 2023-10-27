import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { useDispatch} from 'react-redux';
import { logout} from './features/userSlice';
import { auth } from './firebase';

const Header = () => {

  const dispatch=useDispatch();

  const logOutOfApp=()=>{
    dispatch(logout())
    auth.signOut();
  }

  return (
    <div className='header'>

        <div className="header_left">
            <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="" />
            <div className="header_search">
                <SearchIcon/>
                <input type="text" />
            </div>
        </div>

        <div className="header_right">
            <HeaderOption Icons={HomeIcon} title='Home'/>
            <HeaderOption Icons={SupervisorAccountIcon} title='My Network'/>
            <HeaderOption Icons={BusinessCenterIcon} title='Jobs'/>
            <HeaderOption Icons={ChatIcon} title='Messaging'/>
            <HeaderOption Icons={NotificationsIcon} title='Notification'/>
            <HeaderOption avatar={true} title='Me' onClick={logOutOfApp}/>
        </div>
    </div>
  )
}

export default Header