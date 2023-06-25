import React, { useState } from 'react';
import '../Styles/contact.css';
import Avocado from '../Images/Avocado.mp4';
import { Link } from 'react-router-dom';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    howdidyoufindus: '', // Added the howdidyoufindus field
    review: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the formData to the API endpoint
    fetch('/api/v1/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        // Show the success alert
        alert('Feedback submitted successfully');
        // Reset the form fields
        setFormData({
          name: '',
          email: '',
          howdidyoufindus: '',
          review: ''
        });
      })
      .catch(error => {
        console.error('Error submitting feedback:', error);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className='contactCard'>
      <div className='h1Box'>
        <h1 className='h1'>CONTACT US</h1>
        <div className="line"></div>
      </div>

      <div className="cDetail">
        <div className="videoBox">
          <video src={Avocado} className="video" muted='muted'
            type='video/mp4'
            loop
            autoPlay />
        </div>

        <div className="contactInfo">
          <form onSubmit={handleSubmit}>
            <div className="entry">
              <div className="entry-text">
                Name
              </div>
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="entry">
              <div className="entry-text">
                Email
              </div>
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="entry">
              <div className="entry-text">
                How did you find us
              </div>
              <select name="howdidyoufindus" className="select" value={formData.howdidyoufindus} onChange={handleChange} required> {/* Added the required attribute */}
                <option value="">Select an option</option> {/* Added a default option */}
                <option value="friends">Friends</option>
                <option value="search">Search</option>
                <option value="advertisement">Advertisement</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="textBox">
              <div className="entry-text">
                Drop us a line
              </div>
              <textarea name="review" placeholder="Your Message" value={formData.review} onChange={handleChange}></textarea>
            </div>
          
            <div className="sendBtn">
              <Link to="#" className="btn-full form-button" onClick={handleSubmit}>SEND</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;
