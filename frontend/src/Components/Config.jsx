// src/config.js
const APP_BASE_URL = window.location.origin.includes('localhost')? 'http://127.0.0.1:5176': "https://spotify-clone-frontend-puce.vercel.app/callback"; // Automatically gets current origin

export const SPOTIFY_CLIENT_ID = '7322e3c6dc2e49749868c347b09f83cf';
export const SPOTIFY_CLIENT_SECRET = '7cfa66411fe0420f8781f0309f5f97a1'; // ⚠️ only for testing/demo
export const REDIRECT_URI = `${APP_BASE_URL}/callback`;

export const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
export const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

export const SCOPES = [
  'user-read-private',
  'user-read-email'
].join(' ');
