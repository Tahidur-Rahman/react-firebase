import { EditAttributes, Info } from '@material-ui/icons'
import React from 'react'
import './widgets.css'
import InputItem from './InputItem'

function Widgets() {
    return (
        <div className="widgets">
            <h2>Todays most viewed cour...
            <InputItem Icon={Info} Color="gray"/>
            </h2>
            <div className="widget__sub">
                <h3>1. Six morning habits of.. <InputItem Icon={EditAttributes} Color="gray"/></h3>
                <p>Pete mockaitis | How to be awe..</p>
            </div>
            <div className="widget__sub">
                <h3>2. Unconcious bias <InputItem Icon={EditAttributes} Color="gray"/></h3>
                <p>Stacey Gordon</p>
            </div>
            <div className="widget__sub">
                <h3>3. Critical thinking of bett.<InputItem Icon={EditAttributes} Color="gray"/></h3>
                <p>Beckin Saltzman</p>
            </div>
        <a href="#">Show more on linkedin learning</a>
        </div>
    )
}

export default Widgets
