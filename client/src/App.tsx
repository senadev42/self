import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Pages
import LandingPage from './pages/LandingPage';
import StartTestPage from './pages/TestPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/starttest" Component={StartTestPage} />
      </Routes>
    </Router>
  );
};

export default App;
