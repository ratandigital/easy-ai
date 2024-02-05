'use client'

import React, { useState, useContext } from 'react'
import { allFunction } from '@/units/FunctionContext';


export default function Panel_1() {
  const {home, community, clickHandelarPersonal, clickHandelarModal} = useContext(allFunction);
 
 
  return (
    <div className="nav_group">
    <h2 className="group__title">Start Here</h2>
    <ul className="group__list">
      <li onClick={home} className='cursor-pointer'>
     
          <span className="icon">
            <img src="svg/home.svg" alt="" className="fn__svg" />
          </span>
          <span className="text menu_style">Home</span>
     
      </li>
      <li onClick={community} className='cursor-pointer'>
      
          <span className="icon">
            <img src="svg/community.svg" alt="" className="fn__svg" />
          </span>
          <span className="text menu_style">Community Feed</span>
        
      </li>
      <li onClick={clickHandelarPersonal} className="cursor-pointer">
     
          <span className="icon">
            <img src="svg/person.svg" alt="" className="fn__svg" />
          </span>
          <span className="text menu_style">
            Personal Feed<span className="count">48</span>
          </span>

      </li>
      <li onClick={clickHandelarModal} className="cursor-pointer">
              <span className="icon">
            <img src="svg/cube.svg" alt="" className="fn__svg" />
          </span>
          <span className="text menu_style">Finetuned Models</span>
      
      </li>
    </ul>
  </div>
  )
}
