import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import { main_content } from '../data/Commom'
import '../css/MainSlide.scss'
const MainSlide = () => {
  const MainSlide = useRef(null)
  return (
    <div className="MainSlide">
      <Slider
        arrows={false}
        autoplay={true}
        pauseOnFocus={false}
        pauseOnHover={false}
        ref={MainSlide}
        dots={true}
      >
        {
          main_content.slice(0, 3).map((el, idx) => {
            return (
              <figure className={`itm itm0${idx + 1}`}>
                <div className="inner">
                  <strong>{el.title}</strong>
                  <p>{el.content}</p>
                  <div className='des'>{el.des}</div>
                  <Link to={el.link}>more</Link>
                </div>
              </figure>
            )
          })
        }

      </Slider>
    </div>

  )
}

export default MainSlide