import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'
import { SupabaseProvider } from './SupabaseContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SupabaseProvider>
      <Router>
        <App />
      </Router>
    </SupabaseProvider>
  </React.StrictMode>,
)
