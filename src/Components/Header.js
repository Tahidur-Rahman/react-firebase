import React from 'react'
import './header.css'
import SearchIcon from '@material-ui/icons/Search';
import NavItem from './NavItem';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SmsRoundedIcon from '@material-ui/icons/SmsRounded';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
function Header() {
    return (
        <div className="header">
            <div className="header__left">
            <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt=""/>
            <div className="header__search">
                <SearchIcon className="search"/>
                <input type="text" placeholder="Search"/>
            </div>
            </div>
            <div className="header__right">
            <NavItem Icon={HomeIcon} title="Home" className="active__nav"/>
            <NavItem Icon={SupervisorAccountIcon} title="My Network"/>
            <NavItem Icon={BusinessCenterIcon} title="Jobs"/>
            <NavItem Icon={SmsRoundedIcon} title="Messaging"/>
            <NavItem Icon={NotificationImportantIcon} title="Notifications"/>
            <NavItem Avatar="https://dev-tahid.web.app/static/media/tahidur.f6a3d1b6.png" title="Me" TitleIcon={ArrowDropDownIcon}/>
            <NavItem Icon={ViewModuleIcon} title="Work"/>
            <a href="#">Try premium Free for 1 month</a>
            </div>

        </div>
    )
 }

export default Header
