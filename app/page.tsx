'use client'

import { useState, ChangeEvent } from 'react';

export default function Home() {
  const [rawJson, setRawJson] = useState('');
  const [formattedJson, setFormattedJson] = useState('');

  const handleFormat = () => {
    try {
      const parsed = JSON.parse(rawJson);
      setFormattedJson(JSON.stringify(parsed, null, 2)); 
    } catch (error) {
      // Improved error handling with type guard
      if (error instanceof SyntaxError) {
        setFormattedJson('Invalid JSON syntax');
      } else {
        setFormattedJson('An unexpected error occurred');
      }
    }
  };

  const handleRawJsonChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setRawJson(event.target.value);
  };

  return (
    <main className="container">
      <h1>JSON Formatter</h1>

      <textarea value={rawJson} onChange={handleRawJsonChange} placeholder="Enter raw JSON" />
      <button onClick={handleFormat}>Format</button>

      <pre>{formattedJson}</pre>
    </main>
  );
}
