import React from 'react'
import ReactStars from "react-stars";
import './Reviews.css';

const Reviews = () => {
  return (
    
    <div className='container Reviews  mt-3 mb-5 p-3' >
     <div className='row '>
     <h1>Add your Rating</h1>
     <div className=" mt-3 ">
     <form className='shadow-lg p-3  rounded-5 bg-dark text-light'>
     <textarea className='form-control mt-2 rounded-3 'placeholder='Add Your Feedback' ></textarea>

   <div className='star' >  <ReactStars  count={5} size={24} color2={"#ffd700"} /></div>

     <input type='submit' className='btn btn-outline-primary my-3' value={"Send"} />
     </form>
     </div>
    </div></div>
  )
}

export default Reviews
