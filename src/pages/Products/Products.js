import React  from 'react';
import shirt from "../../Image/section2.jpeg"
import './Products.css'
import { Link } from 'react-router-dom';
const Products = () => {

  return (
    <div className="mb-5">
      <div className='container'>
        <div className='row '>
<div className="col-lg-5 my-5  ">
<img src={shirt}  alt="" className="img w-100 mt-5 rounded-3 im"/>
</div>
<div className='col-lg-6 mt-5 m-auto text-center align-items-center'>
<h1 className='mb-3'><i> Smart T-shirt</i></h1>
<p> smart t-shirt
warming, cooling and massaging t-shirt runs via APP
anywhere anytime with only one button controls you climate
don't wait for the future with cool live it here and now Available for men, women and kids,
all sizes different colors
classic ,casual or sports all what you need just cool </p>

<form>
<label className='me-3'>Size:  </label>

<select id="Size">
  <option placeholder='Choose' value=""></option>
  <option value="S">S</option>
  <option value="M">M</option>
  <option value="L">L</option>
  <option value="XL">XL</option>
  <option value="2XL">2XL</option>
  <option value="3XL">3XL</option>

</select>

<label className='mx-3 my-3'>Color:  </label>
<input   type="color" className='mt-4' />

<div className="">
<label className='me-3'>Gender:  </label>

<select id="gender">

  <option value="S">Man</option>
  <option value="M">Women</option>
  <option value="L">Kids</option>


</select>
<label className='mx-3 my-3'>pieces</label>
<input type="Number" className='mt-4' min={0} max={30} />
</div>
<div>

<Link to="" ><input   className='mt-5 btn btn-outline-primary'  type='submit' value={"Buy Now"} /> </Link>
</div>
</form>
</div>


  
        </div>
    </div>
</div>
  );
};

export default Products;