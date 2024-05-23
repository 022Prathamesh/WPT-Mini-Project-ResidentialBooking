import React from "react";
import Navbar from "../components/Navbar";
import PrathameshImage from "../images/Prathamesh.jpg";
import Placeholder2 from "../images/Vrundali.jpg";
import Placeholder3 from "../images/Hemant.jpg";
import Footer from "../components/Footer";

function ContactUs() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }} className="container mt-3">
        <h2 style={{ textAlign: 'center', color: '#fff' }}>Contact Us</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'nowrap' }} className="main-content">
          <div style={{
            background: '#fff',
            border: '1px solid #ddd',
            borderRadius: '5px',
            margin: '20px',
            padding: '20px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            width: '30%',
            boxSizing: 'border-box',
            textAlign: 'center',
            color: '#333'
          }} className="card">
            <img
              src={PrathameshImage}
              alt="Prathamesh Manohar Chaudhari"
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                display: 'block',
                margin: '0 auto 20px'
              }}
            />
            <h3>Prathamesh Manohar Chaudhari</h3>
            <p>Contact: 7096142093</p>
            <p>Email: prathameshchaudhary01@gmail.com</p>
            <a href="https://www.linkedin.com/in/prathamesh-chaudhari-340179201" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div style={{
            background: '#fff',
            border: '1px solid #ddd',
            borderRadius: '5px',
            margin: '20px',
            padding: '20px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            width: '30%',
            boxSizing: 'border-box',
            textAlign: 'center',
            color: '#333'
          }} className="card">
            <img
              src={Placeholder2}
              alt="Vrundali Patil"
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                display: 'block',
                margin: '0 auto 20px'
              }}
            />
            <h3>Vrundali Patil</h3>
            <p>Contact: 9423117853</p>
            <p>Email: vrundalipatil@gmail.com</p>
            <a href="https://www.linkedin.com/in/vrundali-patil-4312171b0/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div style={{
            background: '#fff',
            border: '1px solid #ddd',
            borderRadius: '5px',
            margin: '20px',
            padding: '20px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            width: '30%',
            boxSizing: 'border-box',
            textAlign: 'center',
            color: '#333'
          }} className="card">
            <img
              src={Placeholder3}
              alt="Hemant Shirsath"
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                display: 'block',
                margin: '0 auto 20px'
              }}
            />
            <h3>Hemant Shirsath</h3>
            <p>Contact: 9156707083</p>
            <p>Email: Hemantshirsath@gmail.com</p>
            <a href="https://www.linkedin.com/in/hemant-shirsath-328306308/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default ContactUs;
