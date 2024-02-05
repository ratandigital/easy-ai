import React from 'react'

export default function Full_Screen() {
  return (
    <div className="bar__item bar__item_fullscreen">
              <a href="#" className="item_opener">
                <img
                  src="svg/fullscreen.svg"
                  alt=""
                  className="fn__svg f_screen"
                />
                <img
                  src="svg/smallscreen.svg"
                  alt=""
                  className="fn__svg s_screen"
                />
              </a>
            </div>
  )
}
