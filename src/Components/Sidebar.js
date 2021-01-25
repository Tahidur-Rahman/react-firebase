import { Avatar } from '@material-ui/core'
import React from 'react'
import BookmarkIcon from '@material-ui/icons/Bookmark';
import InputItem from './InputItem'
import './sidebar.css'

function Sidebar() {
    const recent = topic => <div className="recent"># {topic}</div>
    

    return (
        <div className="sidebar">
            <div className="sidebar__top">
            <img src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2017/08/nature-design.jpg" alt=""/>
             <Avatar className="avatar"/>
             <h2>Tahidur Rahman</h2>
             <h4>mdtahidurrahman20@gmail.com</h4>
             <hr/>
             <h3>Connections <span>7</span></h3>
             <hr/>
             <InputItem Icon={BookmarkIcon} color="gray" title="My Items"/>
            </div>

            <div className="sidebar__bottom">
                <h3>Recent</h3>
                {recent('JavaScript')}
                {recent('management')}
                {recent('education')}
                {recent('innovation')}

            </div>
        </div>
    )
}

export default Sidebar
