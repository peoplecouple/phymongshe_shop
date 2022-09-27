import React, { useRef } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import { top_banner } from '../data/Commom'
import '../css/TopBanner.scss'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Topbanner = () => {
  const topSlider = useRef(null)
  return (
    <div className='TopBanner'>
      <Slider
        arrows={false}
        fade={true}
        autoplay={true}
        ref={topSlider}
      >
        {
          top_banner.map((el, idx) => {
            return (
              <div key={el.id}>
                <Link to={el.link}>{el.content}</Link>
              </div>
            )
          })
        }
      </Slider>
      <FiArrowLeft onClick={() => topSlider.current.slickPrev()} className="icon left" />
      <FiArrowRight onClick={() => topSlider.current.slickNext()} className="icon right"/>
    </div>
  )
}

export default Topbanner