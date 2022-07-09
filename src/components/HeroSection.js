import React from 'react'
import '../App.css'
import { Button } from './Button'
import { ButtonDonate } from './ButtonDonate'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-4.mp4' autoPlay loop muted/>
      <h1>Nice to Meat You</h1>
      <p>What are you waiting for?</p>
      <div className = "hero-btns">
        <Button className = 'btns' buttonStyle = 'btn--outline'
        buttonSize='btn--large'>
            Search for Recipe
        </Button>
        <ButtonDonate className = 'btns' buttonStyle = 'btn--primary'
        buttonSize='btn--large'>
            DONATE FOOD <i className = 'far fa-play-circle' />
        </ButtonDonate>
      </div>
    </div>
  )
}

export default HeroSection
