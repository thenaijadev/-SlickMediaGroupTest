import React from 'react'
import Classes from "./Hero.module.css"
import image from "../../Images/banner.jpg"
function Hero() {
  return (
    <div style={{ backgroundImage:`url(${image})` }} className={Classes.banner}>
      <div className={Classes.hero_text}>
        <h1 className={Classes.hero_text}>
            Watch something incredible.
        </h1>
      </div>
    </div>
  )
}

export default Hero
