import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Section1 from './Section1';
import Section2 from './Section2';

const App = () => {
  return (
    <Router>
      <nav>
        <ul style={{display: 'flex', gap: '20px', position: 'relative'}}>
          <li >
            <Link to="/section1" style={{fontSize: '30px', color: 'yellow'}}>Section1</Link>
          </li>
          <li>
            <Link to="/section2" style={{fontSize: '30px', color: 'yellow'}}>Section2</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/section1" element={<Section1/>} />
        <Route path="/section2" element={<Section2/>} />
      </Routes>
    </Router>
  );
};

export default App;
