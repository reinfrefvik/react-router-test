import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/authContexts.tsx';
import Routers from './Routers.tsx';
import React from 'react';

function App() {
  return (
    <div style={{width: "100%", height: "100%"}}>
      <AuthProvider>
        <div className="App">
          <Router>
            <Routers />
          </Router>
        </div>
      </AuthProvider>
    </div>
  );
}

export default App;
