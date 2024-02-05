import React from 'react'

export default function User_Bar() {
  return (
    <div className="bar__item bar__item_user">
    <a href="#" className="user_opener">
      <img src="img/user/user.jpg" alt="" />
    </a>
    <div className="item_popup">
      <div className="user_profile">
        <div className="user_img">
          <img src="img/user/user.jpg" alt="" />
        </div>
        <div className="user_info">
          <h2 className="user_name">
            Caden Smith<span>Free</span>
          </h2>
          <p>
            <a href="mailto:cadmail@gmail.com" className="user_email">
              cadmail@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="user_nav">
        <ul>
          <li>
            <a href="user-profile.html">
              <span className="icon">
                <img
                  src="svg/person.svg"
                  alt=""
                  className="fn__svg"
                />
              </span>
              <span className="text">Profile</span>
            </a>
          </li>
          <li>
            <a href="user-settings.html">
              <span className="icon">
                <img
                  src="svg/setting.svg"
                  alt=""
                  className="fn__svg"
                />
              </span>
              <span className="text">Settings</span>
            </a>
          </li>
          <li>
            <a href="user-billing.html">
              <span className="icon">
                <img
                  src="svg/billing.svg"
                  alt=""
                  className="fn__svg"
                />
              </span>
              <span className="text">Billing</span>
            </a>
          </li>
          <li>
            <a href="sign-in.html">
              <span className="icon">
                <img
                  src="svg/logout.svg"
                  alt=""
                  className="fn__svg"
                />
              </span>
              <span className="text">Log Out</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}
