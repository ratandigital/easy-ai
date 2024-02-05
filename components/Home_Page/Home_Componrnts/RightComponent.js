import React from 'react'

export default function RightComponent() {
  return (
    <div className="section_right">
    <div className="company_info">
      <img src="img/logo-desktop-full.png" alt="" />
      <p className="fn__animated_text">
        The official server of TECH-AI, a text-to-image AI where
        your imagination is the only limit. We’re building
        market-leading features that will give you greater control
        over your generations.
      </p>
      <hr />
      <div className="fn__members">
        <div className="active item">
          <span className="circle" />
          <span className="text">1,154,694 Online</span>
        </div>
        <div className="item">
          <span className="circle" />
          <span className="text">77,345,912 Members</span>
        </div>
      </div>
    </div>
  </div>
  )
}
