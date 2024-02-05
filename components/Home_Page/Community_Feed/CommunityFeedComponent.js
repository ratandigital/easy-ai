import React from 'react'

export default function CommunityFeedComponent() {
  return (
    <>
    {/* Community Feed Page */}
    <div className="techwave_fn_community_page">
      <div className="fn__title_holder">
        <div className="container">
          <h1 className="title">Community Feed</h1>
        </div>
      </div>
      {/* Feed */}
      <div className="techwave_fn_feed">
        <div className="container">
          {/* feed filter */}
          <div className="feed__filter">
            <div className="filter__left">
              <div className="filter__search">
                <input type="text" placeholder="Search gallery" />
                <a href="#" className="techwave_fn_button">
                  <span>Search</span>
                </a>
              </div>
              <div className="filter__upscaled">
                <label className="fn__checkbox">
                  <input type="checkbox" />
                  Upscaled
                  <span className="checkmark" />
                  <img src="svg/check.svg" alt="" className="fn__svg" />
                </label>
              </div>
            </div>
            <div className="filter__sorting">
              <a
                href="#"
                className="filter__trending enabled techwave_fn_button has__icon small__border"
              >
                <img src="svg/thunder.svg" alt="" className="fn__svg" />
                <span>Trending</span>
              </a>
              <a
                href="#"
                className="filter__new disabled techwave_fn_button has__icon small__border"
              >
                <img src="svg/new.svg" alt="" className="fn__svg" />
                <span>New</span>
              </a>
            </div>
          </div>
          {/* !feed filter */}
          {/* feed content */}
          <div className="feed__content">
            <div className="feed__results">
              <div className="fn__preloader">
                <div className="icon" />
                <div className="text">Loading</div>
              </div>
              <ul className="fn__gallery_items">
                {/* #1 gallery item */}
                <li className="fn__gallery_item">
                  <div className="item" data-id={345}>
                    <div className="img">
                      <img src="img/gallery/1.jpg" alt="" />
                    </div>
                    <div className="item__info">
                      <div className="info__header">
                        <div className="user__info">
                          <img src="img/user/user.jpg" alt="" />
                          <h3 className="author_name">LuckyLee</h3>
                        </div>
                        <a href="#" className="fn__like no_border" data-id={3}>
                          <span className="count">343</span>
                          <img
                            src="svg/like.svg"
                            alt=""
                            className="fn__svg empty__like"
                          />
                          <img
                            src="svg/like-full.svg"
                            alt=""
                            className="fn__svg full__like"
                          />
                        </a>
                      </div>
                      <p className="desc">
                        Terra Fusion: A daring fusion of tectonic forms with
                        neo-abstract swirls, reflecting the chaos and{" "}
                      </p>
                    </div>
                  </div>
                </li>
                {/* !#1 gallery item */}
                {/* #2 gallery item */}
                <li className="fn__gallery_item">
                  <div className="item" data-id={265}>
                    <div className="img">
                      <img src="img/gallery/2.jpg" alt="" />
                    </div>
                    <div className="item__info">
                      <div className="info__header">
                        <div className="user__info">
                          <img src="img/user/user.jpg" alt="" />
                          <h3 className="author_name">LuckyLee</h3>
                        </div>
                        <a href="#" className="fn__like no_border" data-id={265}>
                          <span className="count">65</span>
                          <img
                            src="svg/like.svg"
                            alt=""
                            className="fn__svg empty__like"
                          />
                          <img
                            src="svg/like-full.svg"
                            alt=""
                            className="fn__svg full__like"
                          />
                        </a>
                      </div>
                      <p className="desc">
                        Terra Fusion: A daring fusion of tectonic forms with
                        neo-abstract swirls, reflecting the chaos and{" "}
                      </p>
                    </div>
                  </div>
                </li>
                {/* !#2 gallery item */}
                {/* #3 gallery item */}
                <li className="fn__gallery_item">
                  <div className="item" data-id={456}>
                    <div className="img">
                      <img src="img/gallery/3.jpg" alt="" />
                    </div>
                    <div className="item__info">
                      <div className="info__header">
                        <div className="user__info">
                          <img src="img/user/user.jpg" alt="" />
                          <h3 className="author_name">LuckyLee</h3>
                        </div>
                        <a href="#" className="fn__like no_border" data-id={456}>
                          <span className="count">95</span>
                          <img
                            src="svg/like.svg"
                            alt=""
                            className="fn__svg empty__like"
                          />
                          <img
                            src="svg/like-full.svg"
                            alt=""
                            className="fn__svg full__like"
                          />
                        </a>
                      </div>
                      <p className="desc">
                        Terra Fusion: A daring fusion of tectonic forms with
                        neo-abstract swirls, reflecting the chaos and{" "}
                      </p>
                    </div>
                  </div>
                </li>
                {/* !#3 gallery item */}
                {/* #4 gallery item */}
                <li className="fn__gallery_item">
                  <div className="item" data-id={4311}>
                    <div className="img">
                      <img src="img/gallery/4.jpg" alt="" />
                    </div>
                    <div className="item__info">
                      <div className="info__header">
                        <div className="user__info">
                          <img src="img/user/user.jpg" alt="" />
                          <h3 className="author_name">LuckyLee</h3>
                        </div>
                        <a href="#" className="fn__like no_border" data-id={4311}>
                          <span className="count">120</span>
                          <img
                            src="svg/like.svg"
                            alt=""
                            className="fn__svg empty__like"
                          />
                          <img
                            src="svg/like-full.svg"
                            alt=""
                            className="fn__svg full__like"
                          />
                        </a>
                      </div>
                      <p className="desc">
                        Terra Fusion: A daring fusion of tectonic forms with
                        neo-abstract swirls, reflecting the chaos and{" "}
                      </p>
                    </div>
                  </div>
                </li>
                {/* !#4 gallery item */}
                {/* #5 gallery item */}
                <li className="fn__gallery_item">
                  <div className="item" data-id={33}>
                    <div className="img">
                      <img src="img/gallery/5.jpg" alt="" />
                    </div>
                    <div className="item__info">
                      <div className="info__header">
                        <div className="user__info">
                          <img src="img/user/user.jpg" alt="" />
                          <h3 className="author_name">LuckyLee</h3>
                        </div>
                        <a href="#" className="fn__like no_border" data-id={33}>
                          <span className="count">322</span>
                          <img
                            src="svg/like.svg"
                            alt=""
                            className="fn__svg empty__like"
                          />
                          <img
                            src="svg/like-full.svg"
                            alt=""
                            className="fn__svg full__like"
                          />
                        </a>
                      </div>
                      <p className="desc">
                        Terra Fusion: A daring fusion of tectonic forms with
                        neo-abstract swirls, reflecting the chaos and{" "}
                      </p>
                    </div>
                  </div>
                </li>
                {/* !#5 gallery item */}
                {/* #6 gallery item */}
                <li className="fn__gallery_item">
                  <div className="item" data-id={709}>
                    <div className="img">
                      <img src="img/gallery/6.jpg" alt="" />
                    </div>
                    <div className="item__info">
                      <div className="info__header">
                        <div className="user__info">
                          <img src="img/user/user.jpg" alt="" />
                          <h3 className="author_name">LuckyLee</h3>
                        </div>
                        <a href="#" className="fn__like no_border" data-id={709}>
                          <span className="count">234</span>
                          <img
                            src="svg/like.svg"
                            alt=""
                            className="fn__svg empty__like"
                          />
                          <img
                            src="svg/like-full.svg"
                            alt=""
                            className="fn__svg full__like"
                          />
                        </a>
                      </div>
                      <p className="desc">
                        Terra Fusion: A daring fusion of tectonic forms with
                        neo-abstract swirls, reflecting the chaos and{" "}
                      </p>
                    </div>
                  </div>
                </li>
                {/* !#6 gallery item */}
                {/* #7 gallery item */}
                <li className="fn__gallery_item">
                  <div className="item" data-id={20}>
                    <div className="img">
                      <img src="img/gallery/7.jpg" alt="" />
                    </div>
                    <div className="item__info">
                      <div className="info__header">
                        <div className="user__info">
                          <img src="img/user/user.jpg" alt="" />
                          <h3 className="author_name">LuckyLee</h3>
                        </div>
                        <a href="#" className="fn__like no_border" data-id={20}>
                          <span className="count">700</span>
                          <img
                            src="svg/like.svg"
                            alt=""
                            className="fn__svg empty__like"
                          />
                          <img
                            src="svg/like-full.svg"
                            alt=""
                            className="fn__svg full__like"
                          />
                        </a>
                      </div>
                      <p className="desc">
                        Terra Fusion: A daring fusion of tectonic forms with
                        neo-abstract swirls, reflecting the chaos and{" "}
                      </p>
                    </div>
                  </div>
                </li>
                {/* !#7 gallery item */}
                {/* #8 gallery item */}
                <li className="fn__gallery_item">
                  <div className="item" data-id={45}>
                    <div className="img">
                      <img src="img/gallery/8.jpg" alt="" />
                    </div>
                    <div className="item__info">
                      <div className="info__header">
                        <div className="user__info">
                          <img src="img/user/user.jpg" alt="" />
                          <h3 className="author_name">LuckyLee</h3>
                        </div>
                        <a href="#" className="fn__like no_border" data-id={45}>
                          <span className="count">90</span>
                          <img
                            src="svg/like.svg"
                            alt=""
                            className="fn__svg empty__like"
                          />
                          <img
                            src="svg/like-full.svg"
                            alt=""
                            className="fn__svg full__like"
                          />
                        </a>
                      </div>
                      <p className="desc">
                        Terra Fusion: A daring fusion of tectonic forms with
                        neo-abstract swirls, reflecting the chaos and{" "}
                      </p>
                    </div>
                  </div>
                </li>
                {/* !#8 gallery item */}
              </ul>
            </div>
            <div className="feed__more">
              <a href="#" className="medium techwave_fn_button">
                <span>Load More</span>
              </a>
            </div>
          </div>
          {/* !feed content */}
        </div>
      </div>
      {/* !Feed */}
    </div>
    {/* !Community Feed Page */}
  </>
  
  )
}
