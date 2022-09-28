import React from 'react'
import { Link } from 'react-router-dom'

const List = ({ shopList }) => {
  console.log(shopList)
  return (
    <section className='shopList'>
      <div className="inner">

        {
          shopList.map(el => {
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

export default List