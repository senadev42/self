import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Pages
import LandingPage from './pages/LandingPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={LandingPage} />
      </Routes>
    </Router>
  );
};

export default App;
