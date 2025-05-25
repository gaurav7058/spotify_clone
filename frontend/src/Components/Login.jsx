import React from 'react';
import { AUTH_ENDPOINT, SPOTIFY_CLIENT_ID, REDIRECT_URI, SCOPES } from './config';

const Login = () => {
  const loginUrl = `${AUTH_ENDPOINT}?client_id=${SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${encodeURIComponent(SCOPES)}`;

  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      <a href={loginUrl}>
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded text-lg">
          Login with Spotify
        </button>
      </a>
    </div>
  );
};

export default Login;
