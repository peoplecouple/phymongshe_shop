import React, { useState } from 'react'
import { MainCategory } from './MainCategory'

const MainTab = ({ shopList }) => {
  const link = [
    'pencil', 'liquid', 'powder'
  ]
  const [alink, setAlink] = useState(0)

  return (
    <section className='MainTab sc'>
      <h2>Best Product</h2>
      <ul className='bp_tab'>
        {
          link.map((el, idx) => {
            return (
              <li key={idx} onClick={()=>{setAlink(idx)}}>{el}</li>
            )
          })
        }
      </ul>
      <div className="inner">
        <MainCategory shopList={shopList} category={link[alink]} />
      </div>
    </section>
  )
}

export default MainTab