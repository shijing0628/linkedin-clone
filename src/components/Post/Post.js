import React, { forwardRef } from 'react'
import "./Post.css"
import { Avatar } from '@material-ui/core'
import InputOption from '../InputOption/InputOption';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';

// forwardRef + Feed.js flipmove = animation, this forwardRef + ref={refs} target the object
const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
 return (
  <div ref={ref} className="post">
   <div className="post__header">
    <Avatar src={photoUrl}>
     {name[0]}
    </Avatar>
    <div className="post__info">
     <h2>{name}</h2>
     <p>{description}</p>
    </div>
   </div>

   <div className="post__body">
    <p>{message}</p>
   </div>

   <div className="post__buttons">
    <InputOption title="Like" Icon={ThumbUpIcon} color="gray" />
    <InputOption title="Comment" Icon={CommentIcon} color="gray" />
    <InputOption title="Share" Icon={ShareIcon} color="gray" />
    <InputOption title="Send" Icon={SendIcon} color="gray" />
   </div>
  </div>
 )
}
)
export default Post
