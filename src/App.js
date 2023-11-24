import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/authContexts';
import Routers from './Routers';

function App() {
  return (
    <div>
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
