import React from "react";
import "./App.css";

function App() {
  return ( 
    <>
    <div className="app">
    <div className="menu-bar">
      <div className="logo">1MDM</div>
      <nav className="menu-links">
        <a href="/about-us">About Us</a>
        <a href="/our-story">Our Story</a>
        <a href="/sell">Sell on 1MDM</a>
        <a href="/pricing">Pricing</a>
      </nav>
      <div className="account-links">
        <a href="/my-account">My account</a>
        <a href="/contact-us">Contact Us</a>
      </div>
    </div>
      <header className="header"> 
        <div className="header-content">
          <h4 className="header-title">Sell on 1MDM.com</h4>
          <p className="header-subtitle">Reach millions of B2B buyers globally</p>
          <div className="header-cta">
            <button className="start-selling">Start Selling</button>
            <button className="chat-consultant">Chat with Consultant</button>
          </div>
          <div className="stats">
            <div className="stat-item">
              <strong>26,000,000+</strong>
              <span>active buyers daily</span>
            </div>
            <div className="stat-item">
              <strong>400,000</strong>
              <span>product inquiries daily</span>
            </div>
            <div className="stat-item">
              <strong>200</strong>
              <span>countries and regions represented</span>
            </div>
          </div>
        </div>
      </header>
      <h3 className="sec-head">1mdm.com is a leading ecommerse platform that helps SMEs go global</h3>
      <div className="section-a">
    
     <iframe width="250" height="200" src="https://www.youtube.com/embed/awTnIxl_fdU?si=Bw3qgtJulQ7jRXu0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
     <div className="sub-cont">
      <text>Connect with millions buyers from from around the world.</text>
      <text>Pocket more from each sale, with take rates as 0% in some cases.</text>
      <text>Get the tools and know how to build successful ecommerse presense for your buisness.</text>
      </div>
    </div>

      <div className="section-b">
        <h3>Largest number of products & categories of medical devices on a single place- 1mdm.com</h3>
        <p>Connect with buyers worldwide for your product& start selling now.</p>
      </div>

      {/* Section 1 */}
      <div className="section section1">
        <div className="cont-1">
          <p>Custom Storefront</p>
          <p>Advertising tools</p>
          <p>Data and analytics</p>
          <p>Customers supports</p>
        </div>
        <div className="cont-2">
        <h2>Set up a store that showcases your brand</h2>
        <p>
          Differentiate yourself from the competition with a full store dedicated to your products - no coding or design skills necessary!
        </p>
        </div>
       
      </div>

      {/* Section 2 */}
      <div className="section section2">
        <h3>Success stories from 1mdm.com sellers</h3>
        <div className="testimonial">
          <p>
            "Mr. David runs a manufacturing company that works in the field of medical devices. With administrative and production across the country. With full respect for environment and several years experience using IT systems that are conventional!"
          </p>
          <img
            src="/images/person1.jpg" // Replace with actual image
            alt="Mr. David"
            className="person"
          />
        </div>
      </div>

      {/* Section 3 */}
      <div className="section section3">
        <h3>Ready to Grow Your Business?</h3>
        <div className="cta-buttons">
          <button className="start-selling">Start Selling</button>
          <button className="chat-consultant">Chat with Consultant</button>
        </div>
      </div>
    

      {/* Footer */}
      <footer className="footer">
        <div className="footer-columns">
          <div>
            <h4>Platform</h4>
            <ul>
              <li>Sell on 1MDM</li>
              <li>Pricing</li>
              <li>About Us</li>
              <li>Our Story</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Brands</li>
            </ul>
          </div>
          <div>
            <h4>Press Room</h4>
            <ul>
              <li>Images & E-mail</li>
              <li>Corporate Information</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4>Policies</h4>
            <ul>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Delivery Information</li>
            </ul>
          </div>
        </div>
      </footer>
      
    </div>
    </>
  );
}

export default App;
