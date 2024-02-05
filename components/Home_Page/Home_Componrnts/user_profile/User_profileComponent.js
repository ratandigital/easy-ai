import React from 'react'

export default function User_profileComponent() {
  return (
    <>
    {/* User Profile Page */}
    <div className="techwave_fn_user_profile_page">
      {/* Page Title */}
      <div className="techwave_fn_pagetitle">
        <h2 className="title">User Profile</h2>
      </div>
      {/* !Page Title */}
      <div className="container small">
        <div className="techwave_fn_user_profile">
          <div className="user__profile">
            <div className="user_avatar">
              <img src="img/user/user.jpg" alt="" />
            </div>
            <div className="user_details">
              <ul>
                <li>
                  <div className="item">
                    <h4 className="subtitle">Name</h4>
                    <h3 className="title">Caden Smith</h3>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <h4 className="subtitle">Username</h4>
                    <h3 className="title">@caddeomyth</h3>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <h4 className="subtitle">Email Address</h4>
                    <h3 className="title">cadensmith@gmail.com</h3>
                  </div>
                </li>
              </ul>
            </div>
            <a href="user-settings.html" className="user_edit fn__icon_button">
              <img src="svg/setting.svg" alt="" className="fn__svg" />
            </a>
          </div>
          <div className="user__plan">
            <div className="plan_left">
              <h4 className="subtitle">Your Plan</h4>
              <p className="info">
                <span>Personal Plan</span> - You will given 8000 tokens every
                month
              </p>
            </div>
            <div className="plan_right">
              <a href="pricing.html" className="token_upgrade techwave_fn_button">
                <span>Upgrade</span>
              </a>
            </div>
          </div>
          <div className="user__interests">
            <h4 className="title">What are your interests?</h4>
            <div className="fn__options_list">
              <ul>
                <li>
                  <a
                    href="#"
                    className="techwave_fn_button small__border enabled"
                  >
                    <span>Advertising</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="techwave_fn_button small__border disabled"
                  >
                    <span>Architecture</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="techwave_fn_button small__border disabled"
                  >
                    <span>Art</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="techwave_fn_button small__border disabled"
                  >
                    <span>Education</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="techwave_fn_button small__border disabled"
                  >
                    <span>Fashion</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="techwave_fn_button small__border disabled"
                  >
                    <span>Film TV</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="techwave_fn_button small__border disabled"
                  >
                    <span>Interior</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="techwave_fn_button small__border enabled"
                  >
                    <span>Marketing</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="techwave_fn_button small__border disabled"
                  >
                    <span>Graphics</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="techwave_fn_button small__border disabled"
                  >
                    <span>Games</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="techwave_fn_button small__border disabled"
                  >
                    <span>Stock Images</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="techwave_fn_button small__border disabled"
                  >
                    <span>Other</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* !User Profile Page */}
  </>
  
  )
}
