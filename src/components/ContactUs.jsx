import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import axios from "axios";

const ContactUs = () => {
  return (
    <div>
    <section className="sub-header">
      <nav>
        <a href="first.html"><img src="logo/both black alp[nd white logo.png" alt="" /></a>
        <div className="nav-links" id="navLinks">
          <i className="fa fa-times" onclick="hideMenu()" />
          <ul>
            <li>
              <a href="first.html">Home</a>
            </li>
            <li>
              <a href="About.html">About</a>
            </li>
            <li>
              <a href="Services.html">Services</a>
            </li>
            <li>
              <a href="Contact Us.html">Contact Us</a>
            </li>
          </ul>
        </div>
        <i className="fa fa-bars" onclick="showMenu()" />
      </nav>
      <h1>Contact Us</h1>
    </section>
    {/*----Contact us---*/}
    <section className="location">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6802.706715579156!2d74.36050325000001!3d31.514453500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905ace0f225b1%3A0x57011feed4fa6f23!2sHusnainabad%20Lahore%2C%20Punjab!5e0!3m2!1sen!2s!4v1655380240061!5m2!1sen!2s" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </section>
    <section className="contact-us">
      <div className="row">
        <div className="contact-col">
          <div>
            <i className="fa fa-home" />
            <span>
              <h5>Xyx road, abc building</h5>
              <p>Lahore, Pakistan</p>
            </span>
          </div>
          <div>
            <i className="fa fa-phone" />
            <span>
              <h5>+92 300000000</h5>
              <p>Monday to Saturday, 10AM to 6PM</p>
            </span>
          </div>
          <div>
            <i className="fa fa-envelope-o" />
            <span>
              <h5>info@emsil.com</h5>
              <p>Email uss your query</p>
            </span>
          </div>
        </div>
        <div className="contact-col">
          <form action>
            <input type="text" placeholder="Enter Your Name" required />
            <input type="text" placeholder="Enter Your Email" required />
            <textarea rows={10} placeholder="Message" required defaultValue={""} />
            <button type="submit" className="hero-btn red-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
    {/*---course*/}
    {/*footer*/}
    <section className="footer">
      <h4>About Us</h4>
      <p>jsdncjdskncjdskcnjdskbckjbk</p>
      <div className="icons">
        <i className="fa fa-facebook" />
        <i className="fa fa-whatsapp" />
        <i className="fa fa-instagram" />
        <i className="fa fa-linkedin" />
      </div>
      <p>Made with <i className="fa fa-heart-o" /> by easy tutorials </p>
    </section>
    {/*---Javascript for toggle manu*/}
  </div>
  );
};

export default ContactUs;
