import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  REDIRECT_URI,
  TOKEN_ENDPOINT
} from './Config';

const Callback = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get('code');

    const exchangeCodeForToken = async () => {
      try {
        const authHeader = btoa(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`);

        const response = await fetch(TOKEN_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${authHeader}`
          },
          body: new URLSearchParams({
            grant_type: 'authorization_code',
            code,
            redirect_uri: REDIRECT_URI
          })
        });

        const data = await response.json();

        if (data.access_token) {
          localStorage.setItem('accessToken', data.access_token);
          localStorage.setItem('refreshToken', data.refresh_token);
          localStorage.setItem('expiresIn', data.expires_in);
          navigate('/dashboard');
        } else {
          console.error('Token exchange failed', data);
          navigate('/');
        }
      } catch (err) {
        console.error('Error during token exchange:', err);
        navigate('/');
      }
    };

    if (code) {
      exchangeCodeForToken();
    } else {
      navigate('/');
    }
  }, [location, navigate]);

  return <div className="text-white text-center mt-20">Authenticating...</div>;
};

export default Callback;
