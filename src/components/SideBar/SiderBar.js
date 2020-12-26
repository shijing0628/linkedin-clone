import React from 'react'
import './SideBar.css'
import { Avatar } from '@material-ui/core'

function SideBar() {

 const recentItem = topic => (
  <div className="sidebar__recentItem">
   <span className="sidebar__hash">#</span>
   <p>{topic}</p>
  </div>
 )

 return (
  <div className="sidebar">
   <div className="sidebar__top">
    <img src="https://images.unsplash.com/photo-1508717272800-9fff97da7e8f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGJhY2tncm91bmR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
    <Avatar className="sidebar__avatar" />
    <h2>Brenda Liu</h2>
    <h4>brenda@gmail.com</h4>
   </div>

   <div className="sidebar__stats">
    <div className="sidebar__stat">
     <p>Who viewed you</p>
     <p className="sidebar__StatNumber">2,200</p>
    </div>
    <div className="sidebar__stat">
     <p>View on post</p>
     <p className="sidebar__StatNumber">2,789</p>
    </div>
   </div>
   <div className="sidebar__bottom">
    <p>Recent</p>
    {recentItem('reactjs')}
    {recentItem('programming')}
    {recentItem('software enginerring')}
    {recentItem('design')}
    {recentItem('develper')}
   </div>
  </div>
 )
}

export default SideBar
