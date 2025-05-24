import React, { useEffect, useState } from 'react';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';

const App = () => {
  const code = new URLSearchParams(window.location.search).get('code');
  const [savedCode, setSavedCode] = useState(localStorage.getItem("code"));

  useEffect(() => {
    if (code) {
      localStorage.setItem("code", code);
      setSavedCode(code);
      window.history.replaceState({}, null, "/"); // Clean URL
    }
  }, [code]);

  return savedCode ? <Dashboard code={savedCode} /> : <Login />;
};

export default App;
