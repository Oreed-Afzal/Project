import React from 'react';

const About = () => {
    return ( <div>
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
        <h1>About Us</h1>
      </section>
      {/*----abiut us---*/}
      <section className="about-us">
        <div className="row">
          <div className="about-col">
            <h1>We are best designers</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto consequuntur, minima voluptatem sapiente animi, vitae exercitationem tenetur impedit asperiores ullam, quis soluta earum eveniet eum. Harum suscipit inventore aliquam ratione.</p>
            <a href className="hero-btn red-btn">Explore Now</a>
          </div>
          <div className="about-col">
            <img src="upwork/view 7.jpg" alt="" />
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
    </div> );
};
 
export default About;