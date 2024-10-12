import React, { useEffect, useState } from 'react';

// WebSocket URL (replace with your actual WebSocket server)
const WS_URL = 'ws://localhost:3000'; // Update with actual WebSocket URL

const QuestionRenderer = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Set up WebSocket connection
    const ws = new WebSocket(WS_URL);

    // When a message is received, parse and update the questions
    ws.onmessage = (event) => {
      const newQuestion = JSON.parse(event.data);
      console.log(newQuestion);
      setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
    };

    // Clean up the WebSocket connection on component unmount
    return () => {
      ws.close();
    };
  }, []);

  return (
    <div>
      <h2>Live Questions</h2>
      {questions.map((question, index) => (
        <div key={index} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd' }}>
          <p><strong>Question:</strong> {question.question}</p>
          <p><strong>Hint:</strong> {question.hint}</p>
          {question.type === 'mcq' ? (
            <div>
              <strong>Options:</strong>
              <ul>
                {question.options.map((option, idx) => (
                  <li key={idx}>{option}</li>
                ))}
              </ul>
            </div>
          ) : question.type === 'short_answer' ? (
            <div>
              <strong>Type your answer below:</strong>
              <input type="text" placeholder="Your answer" style={{ marginTop: '10px', padding: '5px' }} />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default QuestionRenderer;
