
import React from 'react';
import './index.css';
import ViewerApp from './ViewerApp';
import EditorApp from './EditorApp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const MainApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/editor/*" element={<EditorApp />} />
        <Route path="/divvylore/*" element={<ViewerApp />} />
        <Route path="/" element={<ViewerApp />} />
      </Routes>
    </Router>
  );
};

export default MainApp;
