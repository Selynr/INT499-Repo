import React, { useState } from 'react';
import './StreamList.css';


function StreamList() {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    setInput(''); // Reset the input after submission
  };

  return (
    <div>
      <h1>StreamList (Homepage)</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Enter your stream" 
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default StreamList;
