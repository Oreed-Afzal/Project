import React from "react";
import "./index.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import image from './logo.png'
import TopMenu from "./components/TopMenu";
import LandingPage from "./components/Home";
import Products from "./components/products/Products";
import ContactUs from "./components/ContactUs";
import NotFound from "./components/NotFound";
import NewProduct from "./components/products/NewProduct";
import UpdateProduct from "./components/products/UpdateProduct";
import About from "./components/About";
import { Home } from "@material-ui/icons";
import Services from "./components/Services";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

const handleAddtoCartClick = (title) => {
  alert("add to cart clicked for "+ title);
};


function App() {

  var navLinks = document.getElementById("navLinks");

        function showMenu(){
            navLinks.style.right = "0";

        }

        function hideMenu(){
            navLinks.style.right = "-200px";
        }
  return (
    <>
    <section className="header">
    <nav>
       <a href="first.html"><img src={image} alt="" /></a> 
      <div className="nav-links" id="navLinks">
        <i className="fa fa-times" onClick={hideMenu} />
        <ul>
          <li>
            <a href="/Home">Home</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/Services">Services</a>
          </li>
          <li>
            <a href="/ContactUs">Contact Us</a>
          </li>
        </ul>
      </div>
      <i className="fa fa-bars" onClick ={showMenu}/>
    </nav>
    <div className="text-box">
      <h1>Best Designing Services</h1>
      <p>
        We provide World Class interior and exterior designing services
      </p>
      <a href className="hero-btn">Visit Us to know more</a>
    </div>
  </section>   
  <div>
        <section className="services">
          <h1>Services We Offer</h1>
          <p>asndlkanfkladnfkansl</p>
          <div className="row">
            <div className="services-col">
              <h3>Interior Designing</h3>
              <p>jksdbfjkbdsjkc jdscjdsbfjdskcjkdsbfkjj</p>
            </div>
            <div className="services-col">
              <h3>Exterior Designing</h3>
              <p>jksdbfjkbdsjkc jdscjdsbfjdskcjkdsbfkjj</p>
            </div>
            <div className="services-col">
              <h3>Furniture Design</h3>
              <p>jksdbfjkbdsjkc jdscjdsbfjdskcjkdsbfkjj</p>
            </div>
          </div>
        </section>
        {/*--campus*/}
        <section className="campus">
          <h1>Global Campus</h1>
          <p>dnsjncjdksnvjkdsnfjdsjncvjdsnj</p>
          <div className="row">
            <div className="campus-col">
              <img src="upwork/2.png" alt="" />
              <div className="layer">
                <h3>Interior</h3>
              </div>
            </div>
            <div className="campus-col">
              <img src="upwork/123456-real.png" alt="" />
              <div className="layer">
                <h3>Exterior</h3>
              </div>
            </div>
            <div className="campus-col">
              <img src="upwork/1_View01.png" alt="" />
              <div className="layer">
                <h3>Furniture</h3>
              </div>
            </div>
          </div>
        </section>
        {/*-facilities*/}
        <section className="facilities">
          <h1>Facilities</h1>
          <p>jdjknjkdnjkdnjbdkjbfburbku</p>
          <div className="row">
            <div className="facilities-col">
              <img src="logo/handsome-business-man-engineer-hard-hat-building.jpg" alt="" />
              <h3>Site Supervision</h3>
              <p>jsdfjkdsnfjkndsjf</p>
            </div>
            <div className="facilities-col">
              <img src="logo/blueprint-house-plan-design-architecture-home-drawing-structure-plan-vector-illustration_1284-47688.webp" alt="" />
              <h3>Working Drawings</h3>
              <p>jsdfjkdsnfjkndsjf</p>
            </div>
            <div className="facilities-col">
              <img src="upwork/BWD (77).jpeg" alt="" />
              <h3>3D Drawings</h3>
              <p>jsdfjkdsnfjkndsjf</p>
            </div>
          </div>
        </section>
        {/*testimonials*/}
        <section className="testimonials">
          <h1>What our Clients say</h1>
          <p>dsfjkndskjcndsjkncjdskncjkdsbvjkdsbk</p>
          <div className="row">
            <div className="testimonial-col">
              <img src="logo/1111111.jpg" alt="" />
              <div>
                <p>dfldsnvdsvnfsjdnvjkdfnvj</p>
                <h3>Oreed Afzal</h3>
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
            </div>
            <div className="testimonial-col">
              <img src="logo/1111.jpg" alt="" />
              <div>
                <p>dfldsnvdsvnfsjdnvjkdfnvj</p>
                <h3>Oreed Afzal</h3>
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
            </div>
          </div>
        </section>
        {/*-call to action*/}
        <section className="cta">
          <h1>Apply for Job</h1>
          <a href="/ContactUs" className="hero-btn">CONTACT US</a>
        </section>
        {/*footer*/}
        <section className="footer">
          <h4>About Us</h4>
          <p>Contact : 0300-0000000  |  Address : Phase-6, DHA, Lahore  |  Email : oreedafzal@gmail.com</p>
          <div className="icons">
            <i className="fa fa-facebook" />
            <i className="fa fa-whatsapp" />
            <i className="fa fa-instagram" />
            <i className="fa fa-linkedin" />
          </div>
          <p>Made with <i className="fa fa-heart-o" /> by Oreed Afzal </p>
        </section>
      </div>
    <Router>
      <div>
        <TopMenu />
        <div style={{ padding: "10px" }}>
          <Switch>
            <Route path="/Login" exact component={Login} />
            <Route path="/Register" exact component={Register} />
            <Route path="/Home" exact component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Services" component={Services} />
            <Route path="/ContactUs" exact component={ContactUs} />
            <Route path="/Products/update/:id" component={UpdateProduct} />
            <Route path="/Products/new" component={NewProduct} />
            <Route path="/Products" component={Products} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;
