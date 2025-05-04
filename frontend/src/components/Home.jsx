import React from 'react'
import bcaLogoSmall from "../assets/bcaLogoSmall.png"
import bcaLogo from "../assets/bcaLogo.png"
import Login from './Login'

const Home = () => {
  return (
        <div class="relative bg-gradient-to-bl from-[#000000] to-[#42017B] ">
          <img className="p-2 absolute"src={bcaLogoSmall} alt="bca-logo"/>
          <img className="m-auto relative -top-10"src={bcaLogo} alt="bca-main-logo"/>
          <Login/>
        </div>
  )
}

export default Home