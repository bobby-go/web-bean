import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    console.log('Submitted:', input);
    setInput('');
  };

  return (
    <div className="app">
      <h1>今天买了什么?</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="输入你买的东西..."
          className="input"
        />
        <button type="submit" className="submit-button">
          提交
        </button>
      </form>
    </div>
  );
}

export default App;
