import React from 'react'
import Logo from './left-panel-component/Logo'
import Panel_1 from './left-panel-component/panel-1/Panel-1'
import Panel_2 from './left-panel-component/panel_2/Panel_2'
import Panel_3 from './left-panel-component/Panel_3/Panel_3'

export default function Left_Panel() {
  return (
<div className="techwave_fn_leftpanel">
        <div className="mobile_extra_closer" />
        {/* logo (left panel) */}
        <Logo/>
        {/* !logo (left panel) */}
        {/* content (left panel) */}
        <div className="leftpanel_content">
          {/* #1 navigation group */}
         <Panel_1/>
          {/* !#1 navigation group */}
          {/* #2 navigation group */}
          <Panel_2/>
          {/* !#2 navigation group */}
          {/* #3 navigation group */}
  <Panel_3/>
          {/* !#3 navigation group */}
        </div>
        {/* !content (left panel) */}
      </div>
  )
}
