import React from 'react'
import shirt from "../../Image/about us.jpeg"
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className="mb-5">
      <div className='container'>
        <div className='row '>
<div className="col-lg-5 my-5  ">
<img src={shirt}  alt="" className="img w-100 mt-5 rounded-3 im"/>
</div>
<div className='col-lg-6  m-auto  align-items-center'>
    <h4  style={{opacity:".7"}}> About Us</h4>
<h1 className='mb-3 ' style={{opacity:".7"}}><i>A Smart T-shirt</i></h1>
<p>A smart t-shirt is a garment embedded with electronic components and sensors
     that can gather, process, and transmit data. 
    It combines the functionality of traditional clothing with the capabilities of modern technology. </p>
    <p>The key components of a smart t-shirt include:</p>
<p>a) Sensor Technology: Smart t-shirts incorporate various types of sensors, such as heart rate monitors and temperature senso</p>
<p>b) Connectivity: Smart t-shirts are equipped with wireless connectivity options, such as Bluetooth or Wi-Fi</p>
</div>


  
        </div>
    </div>
</div>
  )
}

export default AboutUs
