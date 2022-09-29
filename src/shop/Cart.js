import React, { useEffect } from 'react'

const Cart = ({ cart, setCart }) => {
  useEffect(() => {
    setCart(cart.filter((itm, idx, arry) => idx === arry.findIndex(it => it.id === itm.id)))
  }, [])


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