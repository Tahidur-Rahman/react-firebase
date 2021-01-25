import { Avatar } from '@material-ui/core'
import { Comment, Send, Share, ThumbUp } from '@material-ui/icons'
import React from 'react'
import InputItem from './InputItem'
import './post.css'

function Post({name,description,post,photoUrl}) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar/>
                <div className="post__desc">
                    <h2>{name}</h2>
                    <h3>{description}</h3>
                </div>
            </div>
            <div className="post__body">
                <p>{post}</p>
                <img src={photoUrl}/>
            </div>
            <div className="post__bottom">
                <InputItem Icon={ThumbUp} Color="gray" title="Like"/>
                <InputItem Icon={Comment} Color="gray" title="Comment"/>
                <InputItem Icon={Share} Color="gray" title="Share"/>
                <InputItem Icon={Send} Color="gray" title="Send"/>
            </div>

        </div>
    )
}

export default Post
