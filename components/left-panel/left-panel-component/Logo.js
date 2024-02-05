import React from 'react'

export default function Logo() {
  return (
    <div className="leftpanel_logo">
          <a href="index.html" className="fn_logo">
            <span className="full_logo">
              <img
                src="img/logo-desktop-full.png"
                alt=""
                className="desktop_logo"
              />
              <img
                src="img/logo-retina-full.png"
                alt=""
                className="retina_logo"
              />
            </span>
            <span className="short_logo">
              <img
                src="img/logo-desktop-mini.png"
                alt=""
                className="desktop_logo"
              />
              <img
                src="img/logo-retina-mini.png"
                alt=""
                className="retina_logo"
              />
            </span>
          </a>
          <a href="#" className="fn__closer fn__icon_button desktop_closer">
            <img src="svg/arrow.svg" alt="" className="fn__svg" />
          </a>
          <a href="#" className="fn__closer fn__icon_button mobile_closer">
            <img src="svg/arrow.svg" alt="" className="fn__svg" />
          </a>
        </div>
  )
}
