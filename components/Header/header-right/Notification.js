import React from 'react'

export default function Notification_Components() {
  return (
    <div className="bar__item bar__item_notification has_notification">
    <a href="#" className="item_opener">
      <img src="svg/bell.svg" alt="" className="fn__svg" />
    </a>
    <div className="item_popup">
      <div className="ntfc_header">
        <h2 className="ntfc_title">Notifications</h2>
        <a href="notifications.html">View All</a>
      </div>
      <div className="ntfc_list">
        <ul>
          <li>
            <p>
              <a href="notification-single.html">
                Version 4.1.2 has been launched
              </a>
            </p>
            <span>34 Min Ago</span>
          </li>
          <li>
            <p>
              <a href="notification-single.html">
                Video Generation has been released
              </a>
            </p>
            <span>12 Apr</span>
          </li>
          <li>
            <p>
              <a href="notification-single.html">
                Terms has been updated
              </a>
            </p>
            <span>12 Apr</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}
