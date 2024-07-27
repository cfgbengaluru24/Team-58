import React, { useEffect, useState } from 'react';

const FeedbackPage = () => {
  const [feedbackData, setFeedbackData] = useState([]);
  const [positiveSummary, setPositiveSummary] = useState('');
  const [negativeSummary, setNegativeSummary] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch feedback data from the backend when the component mounts
    fetch('http://127.0.0.1:8000/comments')
      .then(response => response.json())
      .then(data => {
        setFeedbackData(data);
      })
      .catch(error => {
        console.error('Error fetching feedback data:', error);
      });
  }, []);

  const generatePositiveSummary = () => {
    setLoading(true);
    fetch('http://127.0.0.1:8000/comments_p')
      .then(response => response.json())
      .then(data => {
        setPositiveSummary(data.response_p);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error generating positive summary:', error);
        setLoading(false);
      });
  };

  const generateNegativeSummary = () => {
    setLoading(true);
    fetch('http://127.0.0.1:8000/comments_n')
      .then(response => response.json())
      .then(data => {
        setNegativeSummary(data.response_n);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error generating negative summary:', error);
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>Feedback Page</h1>
      {feedbackData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Username</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {feedbackData.map(feedback => (
              <tr key={feedback.id}>
                <td>{feedback.timestamp}</td> 
                <td>{feedback.username}</td>
                <td>{feedback.feedback}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No feedback available.</p>
      )}
      <button onClick={generatePositiveSummary} disabled={loading}>
        Generate Positive Feedback Summary
      </button>
      <button onClick={generateNegativeSummary} disabled={loading}>
        Generate Negative Feedback Summary
      </button>
      {positiveSummary && (
        <div>
          <h2>Positive Feedback Summary</h2>
          <textarea rows="10" cols="50" value={positiveSummary} readOnly />
        </div>
      )}
      {negativeSummary && (
        <div>
          <h2>Negative Feedback Summary</h2>
          <textarea rows="10" cols="50" value={negativeSummary} readOnly />
        </div>
      )}
    </div>
  );
};

export default FeedbackPage;