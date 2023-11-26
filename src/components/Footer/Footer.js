import React from "react";
import "./main.css";
import ReactStars from "react-stars";
import American from "../../Image/American_Express-Logo.wine.svg";
import paypal from "../../Image/paypal-svgrepo-com.svg";
import mastercard from "../../Image/mastercard-3-svgrepo-com.svg";
import Visa from "../../Image/Visa Payment Card.svg";
import australia from "../../Image/australia-post-logo-vector.svg";
import dhl from "../../Image/dhl.png";
import { FaEnvelopeOpen, FaGlobeAmericas, FaPhoneAlt } from "react-icons/fa";
import whatsapp from "../../Image/whatsapp-svgrepo-com.svg";
import instagram from "../../Image/social-instagram-ico.svg";
import facebook from "../../Image/social-facebook-ico.svg";

const Footer = () => {
  return (
    <div className="container-fluide footer p-3 text-light">
      <div className="row justify-content-between">
        <div className="col-lg-3 col-md-6 ">
          <h4>Netenders e-commerce specialists</h4>
          <p>Pay with</p>
          <div>
            <img
              src={mastercard}
              alt="mastercard"
              width={70}
              className="rounded-5"
            />
            <img src={Visa} alt="Visa" width={90} className="rounded-5" />
            <img
              src={American}
              alt="American"
              width={90}
              className="rounded-5"
            />
            <img src={paypal} alt="paypal" width={50} className="rounded-5" />
          </div>

          <div>
            <p className="">We ship with</p>
            <img src={dhl} alt="dhl" width={100} className="rounded-5" />
            <img
              src={australia}
              alt="Australia"
              width={120}
              className="rounded-5 mx-lg-5 "
            />
          </div>
        </div>

        <div id="asd" className="col-lg-3 col-md-6">
          <h4>CONTACT FOUNDER</h4>
          <h6>Johan TAWADROUS</h6>
          <div className="d-flex">
            <FaPhoneAlt className="icon me-2" />
            <h6>+65851674852 </h6>
          </div>
          <div className="d-flex ">
            {" "}
            <FaEnvelopeOpen className="icon me-2" />
            <h6>jon@yahoo.com</h6>
          </div>
          <br />
          <br />

          <h4>Co-founder : Mary jack </h4>
          <div className="d-flex">
            <FaPhoneAlt className="icon me-2" />
            <h6>+64235795254 </h6>
          </div>
          <div className="d-flex ">
            <FaEnvelopeOpen className="icon me-2" />
            <h6>Mary@gmail.com </h6>{" "}
          </div>
          <div className="d-flex">
            <FaGlobeAmericas className="icon me-2" />{" "}
            <h6>www.Made.com.au</h6>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <ul style={{ listStyle: "none " }}>
            <h4>OUR SERVICES</h4>
            <li>Express Quote</li>
            <li>Local Wholesale T-shirts</li>
            <li>Quantity Discounts</li>
            <li>Who are we</li>
            <li>Glossary</li>
            <li>Our printer partners</li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-6">
          <ul style={{ listStyle: "none " }}>
            <h4>About</h4>
            <li>Express Quote</li>
            <li>Local Wholesale T-shirts</li>
            <li>Quantity Discounts</li>
            <li>Who are we</li>
            <li>Glossary</li>
            <li>Our printer partners</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="star">
          {/* <h1>hi</h1> */}
          <ReactStars count={5} size={24} color2={"#ffd700"} />
        </div>
        <p className="text-center">Add your Rating</p>
      </div>
      <hr />
      <div className=" row ">
        <p className="text-center">
          Netenders.com Australia PTY LTD - Unit 301 27-39 Abercrombie ST
          Chippendale NSW <br /> 2008 Australia. ACN — 644 210 935 This is NOT
          The return address. For returns, see here
        </p>
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <div>
          <p className="">
            Privacy Policy | Terms & Conditions | Site Map <br />
            <b>NETENDERS - © 2023</b>. All Rights Reserved
          </p>
        </div>

        <div className=" ">
          <img
            className="me-2 mb-2 "
            src={instagram}
            alt="instagram"
            width={30}
          />
          <img
            className="me-2 mb-2 "
            src={facebook}
            alt="facebook"
            width={30}
          />
          <img
            className="me-2 mb-2  "
            src={whatsapp}
            alt="whatsapp"
            width={30}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
