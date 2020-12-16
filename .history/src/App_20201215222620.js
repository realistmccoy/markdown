import React, {useState} from 'react';
import './App.css';

export default function App() {
  const [markdown, SetMarkdown] = useState('')


  return (
    <div className="app">
      <textarea />

      <div className="preview" />
    </div>
  );
}
