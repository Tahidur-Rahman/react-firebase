import React from 'react'

function NavItem({Icon,title,Avatar,TitleIcon}) {
    return (
        <div class="navitem">
            {Icon && <Icon className="icon"/>}
            {Avatar && <img src={Avatar}/>}
            <span>{title}{TitleIcon && <TitleIcon />}</span>
        </div>
    )
}

export default NavItem
