import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="title">Coming Soon</h1>
      <p className="subtitle">Stay updated! Enter your email to be notified:</p>
      <form className="email-form">
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="email-input" 
          required 
        />
        <button type="submit" className="notify-button">
          Notify Me
        </button>
      </form>
    </div>
  );
}

export default App;
