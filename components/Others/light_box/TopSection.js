import React from 'react'

export default function TopSection() {
  return (
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
  )
}
