import React from 'react'
import Search from './header-right/Search'
import Notification_Components from './header-right/Notification'
import Full_Screen from './header-right/Full_Screen'
import Language_Bar from './header-right/Language_Bar'
import Site_Screen from './header-right/Site_Screen'
import User_Bar from './header-right/User_Bar'

export default function Header_Right() {
  return (
    <div className="header__right">
          <div className="fn__nav_bar">
            {/* Search (bar item) */}
          <Search/>
            {/* !Search (bar item) */}
            {/* Notification (bar item) */}
           <Notification_Components/>
            {/* !Notification (bar item) */}
            {/* Full Screen (bar item) */}
           <Full_Screen/>
            {/* !Full Screen (bar item) */}
            {/* Language (bar item) */}
            <Language_Bar/>
            {/* !Language (bar item) */}
            {/* Site Skin (bar item) */}
            <Site_Screen/>
            {/* !Site Skin (bar item) */}
            {/* User (bar item) */}
       <User_Bar/>
            {/* !User (bar item) */}
          </div>
        </div>
  )
}
