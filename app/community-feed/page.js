import React from 'react'

export default function page() {
  return (
    <>
    {/* Moving Submenu */}
    <div className="techwave_fn_fixedsub">
      <ul />
    </div>
    {/* !Moving Submenu */}
    {/* Preloader */}
    <div className="techwave_fn_preloader">
      <svg>
        <circle className="first_circle" cx="50%" cy="50%" r={110} />
        <circle className="second_circle" cx="50%" cy="50%" r={110} />
      </svg>
    </div>
    {/* !Preloader */}
    {/* Report */}
    <div className="techwave_fn_report">
      <a href="#" className="fn__closer fn__icon_button">
        <img src="svg/close.svg" alt="" className="fn__svg" />
      </a>
      <div className="report__closer" />
      <div className="report__content">
        <h3 className="title">Report Item</h3>
        <h3 className="subtitle">What is the main reason for your report?</h3>
        <input className="reason_field" type="text" placeholder="Type here..." />
        <div className="btns">
          <a href="#" className="report techwave_fn_button">
            <span>Report</span>
          </a>
          <a href="#" className="cancel techwave_fn_button">
            <span>Cancel</span>
          </a>
        </div>
      </div>
    </div>
    {/* !Report */}
    {/* Image Lightbox */}
    <div className="techwave_fn_img_lightbox">
      {/* top section (of the image lightbox) */}
      <div className="lightbox__top">
        <div className="lightbox__tl">
          <div className="lightbox__tlbar">
            <div className="lightbox__tlbar_left">
              <div className="item item__share fn__icon_options medium_size">
                <a href="#" className="item__btn fn__icon_button">
                  <img src="svg/share.svg" alt="" className="fn__svg" />
                </a>
                <div className="fn__icon_popup">
                  <ul>
                    <li>
                      <a href="#">Facebook</a>
                    </li>
                    <li>
                      <a href="#">Twitter</a>
                    </li>
                    <li>
                      <a href="#">Instagram</a>
                    </li>
                    <li>
                      <a href="#">Linkedin</a>
                    </li>
                    <li>
                      <a href="#">Pinterest</a>
                    </li>
                    <li>
                      <a href="#" className="fn__copy" data-copied="Copied!">
                        Copy Link
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="item item__download fn__icon_options medium_size">
                <a href="#" className="item__btn fn__icon_button">
                  <img src="svg/download.svg" alt="" className="fn__svg" />
                </a>
                <div className="fn__icon_popup">
                  <ul>
                    <li>
                      <a href="#">Original Image</a>
                    </li>
                    <li>
                      <a href="#">Creative Upscaled Image</a>
                    </li>
                    <li>
                      <a href="#">HD Upscaled Image</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="item item__more fn__icon_options medium_size">
                <a href="#" className="item__btn fn__icon_button">
                  <span className="dots" />
                </a>
                <div className="fn__icon_popup">
                  <ul>
                    <li>
                      <a href="#">Remove Background</a>
                    </li>
                    <li>
                      <a href="#">Creative Upscale</a>
                    </li>
                    <li>
                      <a href="#">Alternative Upscale</a>
                    </li>
                    <li className="high_priorety">
                      <a href="#" className="fn__report">
                        Report Image
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lightbox__tlbar_center">
              <a href="#" className="img_nav nav_prev">
                <img src="svg/arrow.svg" alt="" className="fn__svg" />
              </a>
              <a href="#" className="img_nav nav_next">
                <img src="svg/arrow.svg" alt="" className="fn__svg" />
              </a>
            </div>
            <div className="lightbox__tlbar_right">
              <a href="#" className="fn__like" data-id={2}>
                <span className="count">343</span>
                <img src="svg/like.svg" alt="" className="fn__svg empty__like" />
                <img
                  src="svg/like-full.svg"
                  alt=""
                  className="fn__svg full__like"
                />
              </a>
            </div>
          </div>
          <div className="lightbox__tlimg">
            <img src="img/gallery/main.jpg" alt="" />
          </div>
        </div>
        <div className="lightbox__tr">
          <div className="user__profile">
            <a className="profile_link" href="user-profile.html">
              <img src="img/user/user.jpg" alt="" />
              <h2 className="user_name">LuckyLee</h2>
            </a>
            <a
              className="fn__follow"
              href="#"
              data-follow-text="Follow"
              data-unfollow-text="Unfollow"
            >
              <span className="text">Follow</span>
            </a>
            <a href="#" className="fn__closer fn__icon_button">
              <img src="svg/close.svg" alt="" className="fn__svg" />
            </a>
          </div>
          <div className="item__details">
            <div className="fn__model">
              <div className="model_img">
                <img src="img/user/user.jpg" alt="" />
              </div>
              <div className="model_info">
                <h4 className="model_subtitle">Model</h4>
                <h3 className="model_title">ArtShaper v3</h3>
              </div>
              <a href="image-generation.html" className="fn__icon_button">
                <img src="svg/arrow.svg" alt="" className="fn__svg" />
              </a>
            </div>
            <div className="fn__prompt_details">
              <div className="prompt__header">
                <div className="prompt__text">Prompt Details</div>
                <div className="prompt__options">
                  <a href="#" className="fn__icon_button">
                    <span className="dots" />
                  </a>
                  <div className="prompt__popup">
                    <ul>
                      <li>
                        <a href="#">Remix</a>
                      </li>
                      <li>
                        <a href="#">Image to Image</a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="fn__copy"
                          data-copied="Copied!"
                          data-text="Realistic painting, photorealistic masterpiece detailing, professional photography, natural lighting, volumetric lighting maximalist photoillustration: 8k resolution concept art intricately detailed, complex, elegant, expansive"
                        >
                          Copy Prompt
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="prompt__content">
                <p>
                  Realistic painting, photorealistic masterpiece detailing,
                  professional photography, natural lighting, volumetric lighting
                  maximalist photoillustration: 8k resolution concept art
                  intricately detailed, complex, elegant, expansive
                </p>
              </div>
            </div>
            <div className="techwave_fn_accordion small" data-type="accordion">
              {" "}
              {/* data-type values: accordion, toggle */}
              <div className="acc__item">
                <div className="acc__header">
                  <h2 className="acc__title">Negative Prompt</h2>
                  <div className="acc__icon" />
                </div>
                <div className="acc__content">
                  <p>
                    TECH-AI is an AI-powered content production suite that
                    empowers creators with a powerful, customisable, and
                    user-friendly platform for bringing their ideas to life.
                  </p>
                  <p>
                    With a focus on granular control at every step of content
                    creation, we put creators at the centre of the creative
                    process by offering granular control at every stage of
                    generation, ensuring that AI enhances, rather than replaces,
                    human creative potential.
                  </p>
                  <p>
                    Our custom back-end delivers advancements in model fine
                    tuning, prompt adherence, training and inference speed, and
                    multi-image prompting functionality. We also address common
                    issues around image degradation and have implemented a custom
                    upscaling, with much more on the way!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="fn__details_list">
            <ul>
              <li>
                <div className="sub_title">Created</div>
                <div className="title">April 05, 2023</div>
              </li>
              <li>
                <div className="sub_title">Resolution</div>
                <div className="title">768 x 1024px</div>
              </li>
              <li>
                <div className="sub_title">Sampler</div>
                <div className="title">Tech-AI-Frenify</div>
              </li>
              <li>
                <div className="sub_title">Step Count</div>
                <div className="title">30</div>
              </li>
              <li>
                <div className="sub_title">Base Model</div>
                <div className="title">Frenify v2.0</div>
              </li>
              <li>
                <div className="sub_title">High Contrast</div>
                <div className="title">Off</div>
              </li>
              <li>
                <div className="sub_title">Magic Prompt</div>
                <div className="title">On</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* !top section (of the image lightbox) */}
      {/* related section (of the image lightbox) */}
      <div className="lightbox__related">
        <div className="fn__title_holder">
          <h2 className="title">Related Images</h2>
        </div>
        <div className="fn__grid_items">
          <ul>
            <li>
              <a href="#" data-id={1}>
                <img src="img/related/1.jpg" alt="" />
              </a>
            </li>
            <li>
              <a href="#" data-id={2}>
                <img src="img/related/2.jpg" alt="" />
              </a>
            </li>
            <li>
              <a href="#" data-id={3}>
                <img src="img/related/3.jpg" alt="" />
              </a>
            </li>
            <li>
              <a href="#" data-id={4}>
                <img src="img/related/4.jpg" alt="" />
              </a>
            </li>
            <li>
              <a href="#" data-id={5}>
                <img src="img/related/5.jpg" alt="" />
              </a>
            </li>
            <li>
              <a href="#" data-id={6}>
                <img src="img/related/6.jpg" alt="" />
              </a>
            </li>
            <li>
              <a href="#" data-id={7}>
                <img src="img/related/7.jpg" alt="" />
              </a>
            </li>
            <li>
              <a href="#" data-id={8}>
                <img src="img/related/8.jpg" alt="" />
              </a>
            </li>
            <li>
              <a href="#" data-id={9}>
                <img src="img/related/9.jpg" alt="" />
              </a>
            </li>
            <li>
              <a href="#" data-id={10}>
                <img src="img/related/10.jpg" alt="" />
              </a>
            </li>
            <li>
              <a href="#" data-id={11}>
                <img src="img/related/11.jpg" alt="" />
              </a>
            </li>
            <li>
              <a href="#" data-id={12}>
                <img src="img/related/12.jpg" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* !related section (of the image lightbox) */}
    </div>
    {/* !Image Lightbox */}
    {/* MAIN WRAPPER */}
    <div className="techwave_fn_wrapper">
      <div className="techwave_fn_wrap">
        {/* Searchbar */}
        <div className="techwave_fn_searchbar">
          <div className="search__bar">
            <input
              className="search__input"
              type="text"
              placeholder="Search here..."
            />
            <img src="svg/search.svg" alt="" className="fn__svg search__icon" />
            <a className="search__closer" href="#">
              <img src="svg/close.svg" alt="" className="fn__svg" />
            </a>
          </div>
          <div className="search__results">
            {/* Results will come here (via ajax after the integration you made after purchase as it doesn't work in HTML) */}
            <div className="results__title">Results</div>
            <div className="results__list">
              <ul>
                <li>
                  <a href="#">Artificial Intelligence</a>
                </li>
                <li>
                  <a href="#">
                    Learn about the impact of AI on the financial industry
                  </a>
                </li>
                <li>
                  <a href="#">Delve into the realm of AI-driven manufacturing</a>
                </li>
                <li>
                  <a href="#">
                    Understand the ethical implications surrounding AI
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* !Searchbar */}
        {/* HEADER */}
        <header className="techwave_fn_header">
          {/* Header left: token information */}
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
          {/* /Header left: token information */}
          {/* Header right: navigation bar */}
          <div className="header__right">
            <div className="fn__nav_bar">
              {/* Search (bar item) */}
              <div className="bar__item bar__item_search">
                <a href="#" className="item_opener">
                  <img src="svg/search.svg" alt="" className="fn__svg" />
                </a>
                <div className="item_popup">
                  <input type="text" placeholder="Search" />
                </div>
              </div>
              {/* !Search (bar item) */}
              {/* Notification (bar item) */}
              <div className="bar__item bar__item_notification has_notification">
                <a href="#" className="item_opener">
                  <img src="svg/bell.svg" alt="" className="fn__svg" />
                </a>
                <div className="item_popup">
                  <div className="ntfc_header">
                    <h2 className="ntfc_title">Notifications</h2>
                    <a href="notifications.html">View All</a>
                  </div>
                  <div className="ntfc_list">
                    <ul>
                      <li>
                        <p>
                          <a href="notification-single.html">
                            Version 4.1.2 has been launched
                          </a>
                        </p>
                        <span>34 Min Ago</span>
                      </li>
                      <li>
                        <p>
                          <a href="notification-single.html">
                            Video Generation has been released
                          </a>
                        </p>
                        <span>12 Apr</span>
                      </li>
                      <li>
                        <p>
                          <a href="notification-single.html">
                            Terms has been updated
                          </a>
                        </p>
                        <span>12 Apr</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* !Notification (bar item) */}
              {/* Full Screen (bar item) */}
              <div className="bar__item bar__item_fullscreen">
                <a href="#" className="item_opener">
                  <img
                    src="svg/fullscreen.svg"
                    alt=""
                    className="fn__svg f_screen"
                  />
                  <img
                    src="svg/smallscreen.svg"
                    alt=""
                    className="fn__svg s_screen"
                  />
                </a>
              </div>
              {/* !Full Screen (bar item) */}
              {/* Language (bar item) */}
              <div className="bar__item bar__item_language">
                <a href="#" className="item_opener">
                  <img src="svg/language.svg" alt="" className="fn__svg" />
                </a>
                <div className="item_popup">
                  <ul>
                    <li>
                      <span className="active">English</span>
                    </li>
                    <li>
                      <a href="#">Spanish</a>
                    </li>
                    <li>
                      <a href="#">French</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* !Language (bar item) */}
              {/* Site Skin (bar item) */}
              <div className="bar__item bar__item_skin">
                <a href="#" className="item_opener">
                  <img src="svg/sun.svg" alt="" className="fn__svg light_mode" />
                  <img src="svg/moon.svg" alt="" className="fn__svg dark_mode" />
                </a>
              </div>
              {/* !Site Skin (bar item) */}
              {/* User (bar item) */}
              <div className="bar__item bar__item_user">
                <a href="#" className="user_opener">
                  <img src="img/user/user.jpg" alt="" />
                </a>
                <div className="item_popup">
                  <div className="user_profile">
                    <div className="user_img">
                      <img src="img/user/user.jpg" alt="" />
                    </div>
                    <div className="user_info">
                      <h2 className="user_name">
                        Caden Smith<span>Free</span>
                      </h2>
                      <p>
                        <a href="mailto:cadmail@gmail.com" className="user_email">
                          cadmail@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="user_nav">
                    <ul>
                      <li>
                        <a href="user-profile.html">
                          <span className="icon">
                            <img
                              src="svg/person.svg"
                              alt=""
                              className="fn__svg"
                            />
                          </span>
                          <span className="text">Profile</span>
                        </a>
                      </li>
                      <li>
                        <a href="user-settings.html">
                          <span className="icon">
                            <img
                              src="svg/setting.svg"
                              alt=""
                              className="fn__svg"
                            />
                          </span>
                          <span className="text">Settings</span>
                        </a>
                      </li>
                      <li>
                        <a href="user-billing.html">
                          <span className="icon">
                            <img
                              src="svg/billing.svg"
                              alt=""
                              className="fn__svg"
                            />
                          </span>
                          <span className="text">Billing</span>
                        </a>
                      </li>
                      <li>
                        <a href="sign-in.html">
                          <span className="icon">
                            <img
                              src="svg/logout.svg"
                              alt=""
                              className="fn__svg"
                            />
                          </span>
                          <span className="text">Log Out</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* !User (bar item) */}
            </div>
          </div>
          {/* !Header right: navigation bar */}
        </header>
        {/* !HEADER */}
        {/* LEFT PANEL */}
        <div className="techwave_fn_leftpanel">
          <div className="mobile_extra_closer" />
          {/* logo (left panel) */}
          <div className="leftpanel_logo">
            <a href="index.html" className="fn_logo">
              <span className="full_logo">
                <img
                  src="img/logo-desktop-full.png"
                  alt=""
                  className="desktop_logo"
                />
                <img
                  src="img/logo-retina-full.png"
                  alt=""
                  className="retina_logo"
                />
              </span>
              <span className="short_logo">
                <img
                  src="img/logo-desktop-mini.png"
                  alt=""
                  className="desktop_logo"
                />
                <img
                  src="img/logo-retina-mini.png"
                  alt=""
                  className="retina_logo"
                />
              </span>
            </a>
            <a href="#" className="fn__closer fn__icon_button desktop_closer">
              <img src="svg/arrow.svg" alt="" className="fn__svg" />
            </a>
            <a href="#" className="fn__closer fn__icon_button mobile_closer">
              <img src="svg/arrow.svg" alt="" className="fn__svg" />
            </a>
          </div>
          {/* !logo (left panel) */}
          {/* content (left panel) */}
          <div className="leftpanel_content">
            {/* #1 navigation group */}
            <div className="nav_group">
              <h2 className="group__title">Start Here</h2>
              <ul className="group__list">
                <li>
                  <a
                    href="index.html"
                    className="fn__tooltip menu__item"
                    data-position="right"
                    title="Home"
                  >
                    <span className="icon">
                      <img src="svg/home.svg" alt="" className="fn__svg" />
                    </span>
                    <span className="text">Home</span>
                  </a>
                </li>
                <li>
                  <a
                    href="community-feed.html"
                    className="fn__tooltip active menu__item"
                    data-position="right"
                    title="Community Feed"
                  >
                    <span className="icon">
                      <img src="svg/community.svg" alt="" className="fn__svg" />
                    </span>
                    <span className="text">Community Feed</span>
                  </a>
                </li>
                <li>
                  <a
                    href="personal-feed.html"
                    className="fn__tooltip menu__item"
                    data-position="right"
                    title="Personal Feed"
                  >
                    <span className="icon">
                      <img src="svg/person.svg" alt="" className="fn__svg" />
                    </span>
                    <span className="text">
                      Personal Feed<span className="count">48</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="models.html"
                    className="fn__tooltip menu__item"
                    data-position="right"
                    title="Finetuned Models"
                  >
                    <span className="icon">
                      <img src="svg/cube.svg" alt="" className="fn__svg" />
                    </span>
                    <span className="text">Finetuned Models</span>
                  </a>
                </li>
              </ul>
            </div>
            {/* !#1 navigation group */}
            {/* #2 navigation group */}
            <div className="nav_group">
              <h2 className="group__title">User Tools</h2>
              <ul className="group__list">
                <li>
                  <a
                    href="image-generation.html"
                    className="fn__tooltip menu__item"
                    data-position="right"
                    title="Image Generation"
                  >
                    <span className="icon">
                      <img src="svg/image.svg" alt="" className="fn__svg" />
                    </span>
                    <span className="text">Image Generation</span>
                  </a>
                </li>
                <li>
                  <a
                    href="ai-chat-bot.html"
                    className="fn__tooltip menu__item"
                    data-position="right"
                    title="AI Chat Bot"
                  >
                    <span className="icon">
                      <img src="svg/chat.svg" alt="" className="fn__svg" />
                    </span>
                    <span className="text">AI Chat Bot</span>
                  </a>
                </li>
              </ul>
            </div>
            {/* !#2 navigation group */}
            {/* #3 navigation group */}
            <div className="nav_group">
              <h2 className="group__title">Support</h2>
              <ul className="group__list">
                <li>
                  <a
                    href="pricing.html"
                    className="fn__tooltip menu__item"
                    data-position="right"
                    title="Pricing"
                  >
                    <span className="icon">
                      <img src="svg/dollar.svg" alt="" className="fn__svg" />
                    </span>
                    <span className="text">Pricing</span>
                  </a>
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
                    <li>
                      <a href="documentation.html">
                        <span className="text">Documentation</span>
                      </a>
                    </li>
                    <li>
                      <a href="faq.html">
                        <span className="text">FAQ</span>
                      </a>
                    </li>
                    <li>
                      <a href="changelog.html">
                        <span className="text">
                          Changelog<span className="fn__sup">(4.1.2)</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="contact.html">
                        <span className="text">Contact Us</span>
                      </a>
                    </li>
                    <li>
                      <a href="index-2.html">
                        <span className="text">Home #2</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="sign-in.html"
                    className="fn__tooltip menu__item"
                    data-position="right"
                    title="Log Out"
                  >
                    <span className="icon">
                      <img src="svg/logout.svg" alt="" className="fn__svg" />
                    </span>
                    <span className="text">Log Out</span>
                  </a>
                </li>
              </ul>
            </div>
            {/* !#3 navigation group */}
          </div>
          {/* !content (left panel) */}
        </div>
        {/* !LEFT PANEL */}
        {/* CONTENT */}
        <div className="techwave_fn_content">
          {/* PAGE (all pages go inside this div) */}
          <div className="techwave_fn_page">
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
                                <a
                                  href="#"
                                  className="fn__like no_border"
                                  data-id={3}
                                >
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
                                Terra Fusion: A daring fusion of tectonic forms
                                with neo-abstract swirls, reflecting the chaos and{" "}
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
                                <a
                                  href="#"
                                  className="fn__like no_border"
                                  data-id={265}
                                >
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
                                Terra Fusion: A daring fusion of tectonic forms
                                with neo-abstract swirls, reflecting the chaos and{" "}
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
                                <a
                                  href="#"
                                  className="fn__like no_border"
                                  data-id={456}
                                >
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
                                Terra Fusion: A daring fusion of tectonic forms
                                with neo-abstract swirls, reflecting the chaos and{" "}
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
                                <a
                                  href="#"
                                  className="fn__like no_border"
                                  data-id={4311}
                                >
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
                                Terra Fusion: A daring fusion of tectonic forms
                                with neo-abstract swirls, reflecting the chaos and{" "}
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
                                <a
                                  href="#"
                                  className="fn__like no_border"
                                  data-id={33}
                                >
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
                                Terra Fusion: A daring fusion of tectonic forms
                                with neo-abstract swirls, reflecting the chaos and{" "}
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
                                <a
                                  href="#"
                                  className="fn__like no_border"
                                  data-id={709}
                                >
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
                                Terra Fusion: A daring fusion of tectonic forms
                                with neo-abstract swirls, reflecting the chaos and{" "}
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
                                <a
                                  href="#"
                                  className="fn__like no_border"
                                  data-id={20}
                                >
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
                                Terra Fusion: A daring fusion of tectonic forms
                                with neo-abstract swirls, reflecting the chaos and{" "}
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
                                <a
                                  href="#"
                                  className="fn__like no_border"
                                  data-id={45}
                                >
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
                                Terra Fusion: A daring fusion of tectonic forms
                                with neo-abstract swirls, reflecting the chaos and{" "}
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
          </div>
          {/* !PAGE (all pages go inside this div) */}
          {/* FOOTER (inside the content) */}
          <footer className="techwave_fn_footer">
            <div className="techwave_fn_footer_content">
              <div className="copyright">
                <p>2023© Frenify Team</p>
              </div>
              <div className="menu_items">
                <ul>
                  <li>
                    <a href="terms.html">Terms of Service</a>
                  </li>
                  <li>
                    <a href="privacy.html">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
          {/* !FOOTER (inside the content) */}
        </div>
        {/* !CONTENT */}
      </div>
    </div>
    {/* !MAIN WRAPPER */}
  </>
  
  )
}
