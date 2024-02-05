import React from 'react'

export default function Search() {
  return (
    <div className="bar__item bar__item_search">
              <a href="#" className="item_opener">
                <img src="svg/search.svg" alt="" className="fn__svg" />
              </a>
              <div className="item_popup">
                <input type="text" placeholder="Search" />
              </div>
            </div>
  )
}
