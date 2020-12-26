import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
function Header() {
 return (
  <div className="header">
   <div className="header__left">
    <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="linkedin" alt="logo" />
    <div className="header__search">
     {/* search icon */}
     <SearchIcon />
     <input type="text" />
    </div>
   </div>
   <div className="header__right">
    <HeaderOption title="Home" Icon={HomeIcon} />
    <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
    <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
    <HeaderOption title="Chat" Icon={ChatIcon} />
    <HeaderOption title="Notifications" Icon={NotificationsIcon} />
    <HeaderOption avatar="https://res.cloudinary.com/diym1ymrk/image/upload/v1607610440/test/I80W1Q0_anu518.png" title="me" />

   </div>
  </div>
 )
}

export default Header
