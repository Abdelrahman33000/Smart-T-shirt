import React from "react";
import "./ContactUs.css";
import { ImPhone, ImMail3 } from "react-icons/im";
import { BsCaretRightSquareFill, BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGlobeAmericas } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="container-fluide bg-dark mt-0">
      <div className=" text-light text-center p-4">
        <h1>
          <b className="">Contact Us</b>{" "}
        </h1>
        <p> any question or remarks ? just write Us a message!</p>
      </div>

      <div className="container-fluide side rounded-5   mt-5 ">
        <div className="row">
          {/* side */}
          <div className="  mx-3 text-light mb-2 rounded-4 mt-2 col-lg-3">
            <h4 className="p-4">Contact information</h4>
            <h6 className="mx-4 mb-4">say something to start a live chat!</h6>

            <div className="d-flex align-items-center">
              <Link to="+2011815928">
                <ImPhone className="icon mx-4 my-5" />
              </Link>
              <span>+2011815928</span>
            </div>
            <div className="d-flex align-items-center">
              <Link to="mailto:aboabdo8600@gmail.com">
                <ImMail3 className="icon mx-4 my-5" />
              </Link>
              <span>aboabdo8600@gmail.com</span>
            </div>
            <div className="d-flex align-items-center">
              <Link to="https://khamsat.com/user/abdo330000">
                <FaGlobeAmericas className="icon mx-4 my-5" />
              </Link>
              <span> www.khamsat.com </span>
            </div>
            <div className="icon">
              <Link to="https://www.youtube.com/c/EngAbdelrahmanAbdelwahab">
                <BsCaretRightSquareFill className="icon mx-4 my-5" />
              </Link>
              <Link to="https://www.facebook.com/Abdo55655">
                <BsFacebook className="icon mx-4 my-5" />
              </Link>
              <Link to="https://www.linkedin.com/in/abdelrahman-abdelwahab-7034b3208/">
                <AiFillLinkedin className="icon mx-4 my-5" />
              </Link>
            </div>
          </div>

          <div className="container-fluide  my-2 ms-2  text-dark  rounded-4 mt-2 col-lg-8">
            <form action={"#"} className=" ">
              <div className="d-flex justify-content-around mt-5  ">
                <div className="me-3 form-control">
                  <div>
                    <label>First Name</label>
                  </div>
                  <input type="text" className="inp mt-3" required />
                </div>
                <div className="me-3  form-control">
                  <div>
                    <label>Last Name</label>
                  </div>
                  <input type="text" className="inp mt-3" required />
                </div>
              </div>

              <div className="d-flex me-3  justify-content-around my-5">
                <div className="me-3 form-control ">
                  <div>
                    <label>Email</label>
                  </div>
                  <input type="email" className="inp mt-3" required />
                </div>
                <div className="  form-control">
                  <div>
                    <label>Phone Number</label>
                  </div>
                  <input type="tel" className="inp mt-3" required />
                </div>
              </div>
<div className="me-3">
              <div className="mt-5 mb-3 text-light">
                <label>Message:</label>
              </div>
              <textarea className="form-control w-100" required></textarea>
              </div>

              <div
                className="Container my-5"
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <button className="btn btn-outline-primary ">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
