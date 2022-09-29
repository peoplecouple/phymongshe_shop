import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Slider from 'react-slick'

export const MainCategory = ({ shopList, category }) => {
  const Mainlist = shopList.filter(el => category === el.category)
  const H2 = styled.div`
  font-size:2rem;
  font-weight:500;
  padding:30px 0;
  margin:0 auto 30px auto;
  border-bottom:1px solid #ddd;
  width:1170px;
  `
  return (
    <div>
      <H2>{category}</H2>
      <div className="inner">
        <Slider className='best_slide'
          slidesToShow={4}
          arrows={false}
        >
          {
            Mainlist.map(el => {
              return (
                <figure key={el.id}>

                  <div className="box">
                    <img src={el.src} alt="" />
                  </div>
                  <div className="name"><Link to={"/shopItem/" + el.id}>{el.name} </Link></div>
                  <div className="des">{el.des.substring(0, 50)}</div>
                  <div className="price"><span>{el.price.toLocaleString()}</span>원</div>

                </figure>
              )
            })
          }
        </Slider>

      </div>
    </div>

  )
}
