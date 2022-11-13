import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvaider } from './context/AuthContext';
import { ChatContextProvaider } from './context/ChatContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvaider>
    <ChatContextProvaider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChatContextProvaider>
  </AuthContextProvaider>

);

