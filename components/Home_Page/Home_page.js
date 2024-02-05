

import React from 'react'
import TitleComponets from './Home_Componrnts/TitleComponets'
import InteractiveComponent from './Home_Componrnts/InteractiveComponent'
import RightComponent from './Home_Componrnts/RightComponent'



export default function Home_page() {

  return (
    <div className="techwave_fn_home">
            <div className="section_home">
              <div className="section_left">
                {/* Title Shortcode */}
               <TitleComponets/>
               
                {/* !Title Shortcode */}
                {/* Interactive List Shortcode */}
               <InteractiveComponent/>
                {/* !Interactive List Shortcode */}
                
              </div>
              <RightComponent/>
            </div>
          </div>
  )
}
