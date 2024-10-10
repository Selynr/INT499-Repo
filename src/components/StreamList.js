import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './StreamList.css';

function StreamList() {
  const [input, setInput] = useState('');
  const [streams, setStreams] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setStreams([...streams, input]);
      setInput('');
      setSuccessMessage('Event added successfully!');
      setTimeout(() => setSuccessMessage(''), 2000); // Clear message after 2 seconds
    }
  };

  return (
    <div className="streamlist">
      <h1>StreamList</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Enter your event" 
          required
        />
        <button type="submit">
          <FontAwesomeIcon icon={faPaperPlane} /> Submit
        </button>
      </form>
      
      {successMessage && <p className="success-message">{successMessage}</p>}

      <ul className="streams">
        {streams.map((stream, index) => (
          <li key={index}>
            <FontAwesomeIcon icon={faPaperPlane} className="stream-icon" />
            {stream}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StreamList;
