'use client'

import React, { useState, useContext } from 'react'
import { allFunction } from '@/units/FunctionContext';

export default function Panel_3() {
  const {clickHandelarPricing, clickHandelarDocumaentation, clickHandelarFaq, clickHandelarChangelog,
    clickHandelarLogout, clickHandelarContact} = useContext(allFunction);
  return (
    <div className="nav_group">
    <h2 className="group__title">Support</h2>
    <ul className="group__list">
      <li onClick={clickHandelarPricing} className='cursor-pointer'>
        
          <span className="icon">
            <img src="svg/dollar.svg" alt="" className="fn__svg" />
          </span>
          <span className="text menu_style">Pricing</span>
       
      </li>
      <li className="menu-item-has-children">
        <a
          href="video-generation.html"
          className="fn__tooltip menu__item"
          title="FAQ & Help"
          data-position="right"
        >
          <span className="icon">
            <img src="svg/question.svg" alt="" className="fn__svg" />
          </span>
          <span className="text">FAQ &amp; Help</span>
          <span className="trigger">
            <img src="svg/arrow.svg" alt="" className="fn__svg" />
          </span>
        </a>
        <ul className="sub-menu">
          <li onClick={clickHandelarDocumaentation} className='cursor-pointer'>
        
              <span className="text menu_style2">- Documentation</span>
        
          </li>
          <li onClick={clickHandelarFaq} className='cursor-pointer'>
           
              <span className="text menu_style2">- FAQ</span>
            
          </li>
          <li onClick={clickHandelarChangelog} className='cursor-pointer'>
         
              <span className="text menu_style2">
                - Changelog<span className="fn__sup">(4.1.2)</span>
              </span>
           
          </li>
          <li onClick={clickHandelarContact} className='cursor-pointer'>
            
              <span className="text menu_style2">- Contact Us</span>
          
          </li>
          <li className='cursor-pointer'>
            <a className="active" href="index-2.html">
              <span className="text">Home #2</span>
            </a>
          </li>
        </ul>
      </li>
      <li className='cursor-pointer'>
        <a
          href="/signin"
          className="fn__tooltip menu__item"
          data-position="right"
          title="Log Out"
        >
          <span className="icon">
            <img src="svg/logout.svg" alt="" className="fn__svg" />
          </span>
          <span className="text menu_style2">- Log Out</span>
        </a>
      </li>
    </ul>
  </div>
  )
}
