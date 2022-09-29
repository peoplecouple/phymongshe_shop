import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Category = ({ shopList }) => {
  const { cate } = useParams();
  //url파라미터에 뿌려진 값을 받아와서 새로운 배열이 되고 원래 배열에서 카테고리가 일치하는 것으로 
  const cateList = shopList.filter(el => String(cate) === el.category)
  return (
    <section className='shopList'>
      <div className="inner">
        {
          cateList.map((el, idx) => {
            return (
              <figure key={el.id}>
                <Link to={"/shopItem/" + el.id}>
                  <div className="box">
                    <img src={el.src} alt="" />
                  </div>
                  <div className="name">{el.name}</div>
                  <div className="des">{el.des.substring(0, 50)}</div>
                  <div className="price"><span>{el.price.toLocaleString()}</span>원</div>
                </Link>
              </figure>
            )
          })
        }
      </div>
    </section>
  )
}

export default Category