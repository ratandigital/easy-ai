import React,{useContext} from 'react'
import { allFunction } from '@/units/FunctionContext'

export default function InteractiveComponent() {
  let {clickHandelarImage, clickHandelarChat} = useContext(allFunction)
  return (
    <div className="techwave_fn_interactive_list modern">
                  <ul>
                    <li onClick={clickHandelarImage} className='cursor-pointer'>
                      <div className="item flex p-5">
                    
                          <span className="icon ">
                            <img
                              src="svg/image.svg"
                              alt=""
                              className="fn__svg"
                            />
                          </span>
                          <h2 className="homeTitle mt-5">Image Generation</h2>
                          <p className="desc">
                            This field of AI combines deep learning algorithms
                            and generative models to create new images that
                            resemble real-world photographs or exhibit creative
                            and imaginative qualities.
                          </p>
                          <span className="arrow mt-7">
                            <img
                              src="svg/arrow.svg"
                              alt=""
                              className="fn__svg"
                            />
                          </span>
                       
                      </div>
                    </li>
                    <li onClick={clickHandelarChat} className='cursor-pointer'>
                      <div className="item flex p-5">
                  
                          <span className="icon">
                            <img
                              src="svg/chat.svg"
                              alt=""
                              className="fn__svg"
                            />
                          </span>
                          <h2 className="homeTitle mt-5">AI Chat Bot</h2>
                          <p className="desc">
                            An AI chatbot, short for artificial intelligence
                            chatbot, is a computer program designed to simulate
                            human-like conversations and provide automated
                            responses to user queries or prompts.{" "}
                          </p>
                          <span className="arrow mt-7">
                            <img
                              src="svg/arrow.svg"
                              alt=""
                              className="fn__svg"
                            />
                          </span>
                     
                      </div>
                    </li>
                  </ul>
                </div>
  )
}
