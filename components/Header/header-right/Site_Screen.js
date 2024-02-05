import React from 'react'

export default function Site_Screen() {
  return (
    <div className="bar__item bar__item_skin">
    <a href="#" className="item_opener">
      <img src="svg/sun.svg" alt="" className="fn__svg light_mode" />
      <img src="svg/moon.svg" alt="" className="fn__svg dark_mode" />
    </a>
    <div className="item_popup"></div>
  </div>
  )
}
