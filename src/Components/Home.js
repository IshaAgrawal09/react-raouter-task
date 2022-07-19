import React from "react";
import "./Home.css"

const Home = () => {
  return <div className="home">
    
    <div className="main">

      <div className="content">
        <h1>Make up to $35/hr </h1>
        <h1>Driving Your Car</h1>
      </div>

      <div className="signup">
        <h2>Apply Now</h2>
        <p>Enter your Info, and then download the Lyft app to create your driver profile.</p>
        <input type='text' placeholder="First Name"/>
        <input type='text' placeholder="Last Name"/>
        <input type='email' placeholder="Email Address"/>
        <input type='text' placeholder="City"/>
        <input type="text" placeholder="Phone Number"/>
        <input type='text' placeholder="Promo Code(Optional)"/>
        <br/>
        <input type='checkbox' id="checkbox"/>
        <label>I agree to the <span className="pink">Lyft Terms</span></label>
        <br />  
        <button id="submit">Become a Driver</button>
        <p>Already Applied? <a href="/"  className="pink">Check the status of your application here.</a></p>
      </div>
    </div>
    <div className="bottom">
      <div id="text">
      <h2>See How Much You Can Make</h2>
      <p>How many hours do you want to drive this week?</p>
      <div id="textField">
      <input placeholder="Hours" id="hours"/>
      <input placeholder="City" id="city"/>
      <button id="calculate">CALCULATE</button>
      </div>
      </div>
    </div>
  </div>;
};

export default Home;
