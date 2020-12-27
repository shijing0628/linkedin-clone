import React from 'react'
import './Widget.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


function Widget() {
 const newsArticle = (heading, subtitle) => (
  <div className="widget__article">
   <div className="widget__articleLeft">
    <FiberManualRecordIcon />
   </div>
   <div className="widget__articleRight">
    <h4>{heading}</h4>
    <p>{subtitle}</p>
   </div>
  </div>
 )


 return (
  <div className="widget">
   <div className="widget__header">
    <h2>Linked News</h2>
    <InfoIcon />
   </div>
   {newsArticle('Brenda React', 'Top news -1 ')}
   {newsArticle('Brenda React', 'Top news -2 ')}
   {newsArticle('Brenda React', 'Top news -3 ')}
   {newsArticle('Brenda React', 'Top news -4 ')}
  </div>
 )
}

export default Widget
