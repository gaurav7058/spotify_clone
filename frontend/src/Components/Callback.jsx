// src/Components/Callback.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// const CLIENT_ID = "7322e3c6dc2e49749868c347b09f83cf";
//   const REDIRECT_URI = "http://127.0.0.1:5173/dashboard";
//   const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
//   const RESPONSE_TYPE = "code";
//   const SCOPES = [
//     "user-read-private",
//     "playlist-read-private",
//     "user-library-read"
//   ];

const Callback = () => {
  const navigate = useNavigate();
  useEffect(() => {
    
  }, []);

  return <p>Authorizing...</p>;
};

export default Callback;
