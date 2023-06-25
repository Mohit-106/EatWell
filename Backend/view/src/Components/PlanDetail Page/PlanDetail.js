import axios from 'axios';
import React, { useState } from 'react';
import '../Styles/planDetail.css';
import '../Styles/contact.css';
import AuthProvider, { useAuth } from '../Context/AuthProvider';

function PlanDetail() {
  const [userName, setUserName] = useState('');
  const [planName, setPlanName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(5);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    try {
      setSubmitting(true);

      const reviewData = {
        description: feedback,
        rating: rating.toString(),
        user: userName,
        plan: planName,
      };

      await axios.post('/api/v1/review', reviewData);

      setUserName('');
      setPlanName('');
      setFeedback('');
      setRating(5);
      setSubmitting(false);

      // Display success message as an alert
      alert('Review submitted successfully!');
    } catch (error) {
      console.error('Error submitting review:', error);
      setSubmitting(false);
    }
  };

  return (
    <div className="pDetailBox">
      <div className="h1Box">
        <h1 className="h1">Add Review</h1>
        <div className="line"></div>
      </div>

      <div className="reviewBox">
        <div className="reviewEnrty">
          <input
            type="text"
            placeholder="User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Plan Name"
            value={planName}
            onChange={(e) => setPlanName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Write Feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <select
            name=""
            id=""
            className="select"
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
          >
            <option value="5">5 Excellent</option>
            <option value="4">4 Very Good</option>
            <option value="3">3 Good</option>
            <option value="2">2 Poor</option>
            <option value="1">1 Very Poor</option>
          </select>
          <button className="btn" onClick={handleSubmit} disabled={submitting}>
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlanDetail;
