import React from 'react'

export default function Language_Bar() {
  return (
    <div className="bar__item bar__item_language">
    <a href="#" className="item_opener">
      <img src="svg/language.svg" alt="" className="fn__svg" />
    </a>
    <div className="item_popup">
      <ul>
        <li>
          <span className="active">English</span>
        </li>
        <li>
          <a href="#">Spanish</a>
        </li>
        <li>
          <a href="#">French</a>
        </li>
      </ul>
    </div>
  </div>
  )
}
