import React, { useEffect, useState } from 'react';

const FeedbackPage = () => {
  const [feedbackData, setFeedbackData] = useState([]);
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch feedback data from the backend when the component mounts
    fetch('/api/feedback')
      .then(response => response.json())
      .then(data => {
        setFeedbackData(data);
      })
      .catch(error => {
        console.error('Error fetching feedback data:', error);
      });
  }, []);

  const generateSummary = (type) => {
    setLoading(true);
    fetch('/api/feedback/summary', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type }),
    })
      .then(response => response.json())
      .then(data => {
        setSummary(data.summary);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error generating summary:', error);
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
              <th>Date</th>
              <th>Username</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {feedbackData.map(feedback => (
              <tr key={feedback.id}>
                <td>{feedback.date}</td>
                <td>{feedback.username}</td>
                <td>{feedback.feedback}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No feedback available.</p>
      )}
      <button className="negative" onClick={() => generateSummary('negative')} disabled={loading}>
        Generate Negative Feedback Summary
      </button>
      <button className="positive" onClick={() => generateSummary('positive')} disabled={loading}>
        Generate Positive Feedback Summary
      </button>
      {summary && (
        <textarea rows="10" cols="50" value={summary} readOnly />
      )}
    </div>
  );
};

export default FeedbackPage;
