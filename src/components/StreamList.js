import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faEdit, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
import './StreamList.css';

function StreamList() {
  const [input, setInput] = useState('');
  const [streams, setStreams] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      if (editIndex !== null) {
        // Edit existing event
        const updatedStreams = streams.map((stream, index) =>
          index === editIndex ? { ...stream, text: input } : stream
        );
        setStreams(updatedStreams);
        setEditIndex(null);
      } else {
        // Add new event
        setStreams([...streams, { text: input, completed: false }]);
      }
      setInput('');
      setSuccessMessage('Event added successfully!');
      setTimeout(() => setSuccessMessage(''), 2000); // Clear message after 2 seconds
    }
  };

  const handleEdit = (index) => {
    setInput(streams[index].text);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedStreams = streams.filter((_, i) => i !== index);
    setStreams(updatedStreams);
  };

  const handleComplete = (index) => {
    const updatedStreams = streams.map((stream, i) =>
      i === index ? { ...stream, completed: !stream.completed } : stream
    );
    setStreams(updatedStreams);
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
          <FontAwesomeIcon icon={faPaperPlane} /> {editIndex !== null ? 'Update' : 'Submit'}
        </button>
      </form>
      
      {successMessage && <p className="success-message">{successMessage}</p>}

      <ul className="streams">
        {streams.map((stream, index) => (
          <li key={index} className={stream.completed ? 'completed' : ''}>
            <span>{stream.text}</span>
            <div className="action-buttons">
              <button onClick={() => handleComplete(index)} className="complete-btn" title="Complete">
                <FontAwesomeIcon icon={faCheck} />
              </button>
              <button onClick={() => handleEdit(index)} className="edit-btn" title="Edit">
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button onClick={() => handleDelete(index)} className="delete-btn" title="Delete">
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StreamList;
