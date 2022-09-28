import React from 'react'

const Cart = ({ cart }) => {
  return (
    <div>
      {
        cart.map(el => {
          return (
            <ul>
              <li>{el.id}</li>
              <li>{el.itm}</li>
              <li>{el.price}</li>
            </ul>
          )
        })
      }
    </div>
  )
}

export default Cart