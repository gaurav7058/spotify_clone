import React from 'react';
// change
const Login = () => {
  
  const loginUrl = `https://accounts.spotify.com/authorize?client_id=7322e3c6dc2e49749868c347b09f83cf&redirect_uri=https://spotify-clone-frontend-flax.vercel.app/dashboard&response_type=code&scope=user-read-private%20playlist-read-private%20user-library-read`;


  //https://spotify-clone-frontend-flax.vercel.app/dashboard?code=AQDjYWb5Gcw-MnEPbSfWxQ5vnfPchKq09ReaazcBDKXtXrl01US03uClnTrvRwmRxPv8-sKBKqgUE1DzEGaj9GKbOKDh4W4f0DcqBFZt9jJxBjKdM9H4OMJP9ftUpMWglxfLygyqbzkUuDKeQ-VilcXRPWWL3FTKcNP8o3QBcZLicl23x2E_MrWh-sJVAygBK0k_QJkwRtzTlewZXrfJQnlV2Z4z4vuR7PIBDIJJkXipJQiqbMUK1bWHxrtz56yCRT4kbFgDsYTFedMUfGtMd8l9DWMB8cykTw
  return (
    <div className="flex justify-center items-center h-screen">
      <a href={loginUrl}>
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Login with Spotify
        </button>
      </a>
    </div>
  );
};

export default Login;
