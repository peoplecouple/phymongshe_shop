import React from 'react'
import { Link } from 'react-router-dom'

const MainNav = ({ shopList }) => {
  //중복이 제거된 배열 category가 필요하다
  const cate = shopList.filter(
    (itm, idx, callback) => idx === callback.findIndex(el => el.category === itm.category)
  )
  return (
    <ul>
      <li><Link to="/">BRAND</Link></li>
      <li><Link to="/shopList">ALL PRODUCTS</Link></li>
      {
        cate.map(el => {
          return el.category && <li className='list' key={el.id}><Link to={"/shopList/" + el.category}>{el.category}</Link></li>

        })
      }
      <li><Link to="/">CS CENTER</Link></li>
    </ul>
  )
}

export default MainNav