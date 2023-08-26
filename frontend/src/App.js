// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormComponent from './components/FormComponent.jsx';
import InstituteLogin from './components/InstituteLogin.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<FormComponent />} path="/" />
        <Route element={<InstituteLogin />} path="/institute-login" />
      </Routes>
    </Router>
  );
};

export default App;
