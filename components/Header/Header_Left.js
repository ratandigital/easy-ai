import React from 'react'

export default function Header_Left() {
  return (
    <div className="header__left">
    <div className="fn__token_info">
      <span className="token_summary">
        <span className="count">120</span>
        <span className="text">
          Tokens
          <br />
          Remain
        </span>
      </span>
      <a href="pricing.html" className="token_upgrade techwave_fn_button">
        <span>Upgrade</span>
      </a>
      <div className="token__popup">
        Resets in <span>19 hours.</span>
        <br />
        Daily limit is <span>200 tokens</span>
      </div>
    </div>
  </div>
  )
}
