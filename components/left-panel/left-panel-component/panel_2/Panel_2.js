'use client'

import React, { useState, useContext } from 'react'
import { allFunction } from '@/units/FunctionContext';

export default function Panel_2() {
  const {clickHandelarChat, clickHandelarImage} = useContext(allFunction);
  return (
    <div className="nav_group">
    <h2 className="group__title">User Tools</h2>
    <ul className="group__list">
      <li onClick={clickHandelarImage} className='cursor-pointer'>
       
          <span className="icon">
            <img src="svg/image.svg" alt="" className="fn__svg" />
          </span>
          <span className="text menu_style">Image Generation</span>
     
      </li>
      <li onClick={clickHandelarChat} className='cursor-pointer'>
     
          <span className="icon">
            <img src="svg/chat.svg" alt="" className="fn__svg" />
          </span>
          <span className="text menu_style">AI Chat Bot</span>
     
      </li>
    </ul>
  </div>
  )
}
