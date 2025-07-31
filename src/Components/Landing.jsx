import React from 'react'
import "./Landing.css"
import "./LandingMedia.css"

import rightArrow from "../assets/arrow-right.svg"
import Vector  from "../assets/vector.svg"
import rightIcon from "../assets/rightIcon.png"
import rightBottomIcon from "../assets/rightBottomIcon.svg"
import leftIcon from "../assets/leftIcon.svg"
import lines from "../assets/lines.svg"
import Certificate from "../assets/certificate.svg"
import medal from "../assets/medal.svg"


const Landing = () => {
  return (
    <div className='LandingMain' >
        <div className="LandingTop">
            <div className="LandingTopIn">
                <div className="LandingTopLeft">
                    <p className='LandingTopLeftHead1' >We make it the way your <span className='LandingTopLeftHead2' >child</span> Loves it</p>
                    <img src={Vector} alt="" className='LandingTopLeftVector' />
                    <p className='LandingTopLeftText1' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis </p>
                    <div className="LandingTopLeftBottom">
                        <div className="LandingTopLeftBottmLeft">
                            <img src={rightArrow} alt=""  className='LandingTopLeftBottmLeftImg' />
                        </div>
                        <p className='LandingTopLeftBottmLeftText' >Discover now</p>
                    </div>
                </div>

                <div className="LandingTopRight">
                    <div className="LandingTopRightLeft">
                        <div className="LandingTopRightLeftTop">
                        </div>
                        <div className="LandingTopRightLeftMid">
                            <img src={leftIcon} alt="" className='LandingTopRightLeftMidImg' />
                            <p className='LandingTopRightRightTopText1' >Guidance</p>
                            <p className='LandingTopRightRightTopText2' style={{width:"80%"}} >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.  </p>
                        </div>
                        <div className="LandingTopRightLeftBottom">
                            <img src={lines} alt="" className='lines' />
                        </div>

                    </div>
                    <div className="LandingTopRightRight">
                        <div className="LandingTopRightRightTop">
                            <img src={rightIcon} alt="" className='LandingTopRightRightTopImg' />
                            <p className='LandingTopRightRightTopText1' >Exploring skills</p>
                            <p className='LandingTopRightRightTopText2' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                        </div>
                        <div className="LandingTopRightRightBottom">
                            <div className="LandingTopRightRightBottomLeft">
                                <img src={rightBottomIcon} alt="" className='LandingTopRightRightTopImg' style={{marginLeft:24}} />
                                <p className='LandingTopRightRightTopText1' >Decision making</p>
                                <p className='LandingTopRightRightTopText2' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.  </p>
                            </div>
                            <div className="LandingTopRightRightBottomRight">
                            </div>
                        </div>
                    </div>
                </div>
 
            </div>
        </div>
        <div className="LandingBottom">
            <div className="LandingBottomLeft">
                <div className='LandingBottomLeftIn' >
                    <p className='LandingTopLeftHead1' >Much enjoyable <span className='LandingTopLeftHead2' >sessions</span> wraps in</p>
                    <p className='LandingTopLeftText1' >Amet minim mollit non deserunt ullamco est sit aliqua dolor do <br />amet sint. Velit officia consequat duis </p>
                    <div className="LandingTopLeftBottom">
                        <div className="LandingBottomLeftBottom">
                            <img src={Certificate} alt=""  className='LandingBottomLeftBottmLeftImg' />
                            <img src={medal} alt=""  className='LandingBottomLeftBottmLeftImg2' />
                        </div>
                        <p className='LandingTopLeftBottmLeftText' >Certificate included</p>
                    </div>
                </div>

            </div>     
            <div className="LandingBottomRight">
<div className="LandingBottomRightIn">
  <div className="top-section">
    <p className='Price' >₹ 199</p>
    <p className='head' >Per head</p>
    <span className="offer">60% OFF</span>
  </div>
  <div className="divider"></div>
  <div className="bottom-section">
    <p>G E T N O W</p>
  </div>
</div>
            </div>     
        </div>
    </div>
  )
}

export default Landing