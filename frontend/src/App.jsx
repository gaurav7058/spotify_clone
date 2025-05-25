import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import LoadingSpinner from './Components/LoadingSpinner';

const App = () => {
  const codeFromURL = new URLSearchParams(window.location.search).get('code');
  const [code, setCode] = useState(localStorage.getItem("code"));
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (codeFromURL) {
      localStorage.setItem("code", codeFromURL);
      setCode(codeFromURL);
      window.history.replaceState({}, null, "/");
    }
    setLoading(false);
  }, [codeFromURL]);

  if (loading) return <LoadingSpinner message="Initializing app..." />;

  return (
    //https://spotify-clone-frontend-flax.vercel.app
    <Router>
      <Routes>
        <Route path="/" element={code ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/dashboard" element={code ? <Dashboard code={code} /> : <Navigate to="/" />} />
        <Route path="*" element={<p className="text-white text-center mt-10">404 - Page Not Found</p>} />
      </Routes>
    </Router>
  );
};

export default App;