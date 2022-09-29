import React from 'react'
import MainSlide from '../components/MainSlide'
import MainTab from '../components/MainTab'
import '../css/Main.scss'

const Main = ({ shopList }) => {
  return (
    <>
      <MainSlide />
      <MainTab shopList={shopList} />
    </>
  )
}

export default Main