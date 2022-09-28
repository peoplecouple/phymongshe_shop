import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './pages/Main'
import List from './shop/List'
import Itm from './shop/Itm'
import Cart from './shop/Cart'
import './css/ShopDetail.scss'

//https://desipossa.github.io/shop_cra/assets/data.json
const App = () => {
  const [itm, setItm] = useState()
  const [cart, setCart] = useState([])
  useEffect(() => {
    const url = "https://desipossa.github.io/shop_cra/assets/data.json"
    const getProduct = async () => {
      const res = await axios.get(url)
      const shopdata = res.data.slice(50, 140).map(el => {
        return {
          id: el.id,
          name: el.name,
          src: el.image_link,
          brand: el.brand,
          category: el.category,
          price: el.price * 1450,
          des: el.description,
          color: el.product_colors,
          time: el.created_at,
          type: el.type,
        }
      })
      //이렇게하면 return속에 담은 데이터만 shopdata에 들어감
      //toLocaleString()하면 세개마다 점 찍힘
      //substring(0,50) 50자에서 잘라라 가 됨

      setItm(shopdata)
    }
    getProduct();
  }, [])
  return (
    <>
      <Header cart={cart} />



      {
        !itm ?
          <div>로딩중입니다.</div>
          :
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/cart' element={<Cart cart={cart} />} />
            <Route path='/shopList' element={<List shopList={itm} />} />
            <Route path='/shopItem/:itm' element={<Itm shopList={itm} cart={cart} setCart={setCart} />} />
          </Routes>

      }

      <Footer />
    </>
  )
}

export default App