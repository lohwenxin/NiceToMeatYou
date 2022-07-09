import React from 'react'
import '../../App.css'
import { Button } from '../Button'
import '../Motivation.css'
import  MediaCard1 from "../MediaCard1";
import  MediaCard2 from "../MediaCard2";


function Motivation() {
  return (
    <div className='moti-container'>
      <video src='/videos/video-4.mp4' autoPlay loop muted/>   
      <h1>Our Motivation</h1>
      <p>By providing you recipes for what is left in your fridge, we hope to reduce food wastage in Singapore. You could donate your excess food too!</p>
      <div className='card-container'>
        <MediaCard1 class="item"/>
        <MediaCard2 class="item"/>
      </div>
    </div>
  )
}

export default Motivation;
