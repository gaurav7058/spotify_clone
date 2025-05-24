import React, { useEffect, useState } from 'react';
import useAuth from './useAuth';
import axios from 'axios';

const Dashboard = ({ code }) => {
  const accessToken = useAuth(code);
  const user_id = "smedjan";
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    if (!accessToken) return;

    async function fetchData() {
      try {
        const res = await axios.get(`https://api.spotify.com/v1/users/${user_id}/playlists`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          }
        });
        setPlaylists(res.data.items);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching playlists:", error);
      }
    }

    fetchData();
  }, [accessToken]);

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">User playList</h1>

      {!playlists.length ? (
        <p className="text-center text-gray-400">Loading playlists...</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {playlists.map((playlist) => (
            <div
              key={playlist.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300"
            >
              {Array.isArray(playlist.images) && playlist.images.length > 0 && (
                <img
                  src={playlist.images[0].url}
                  alt={playlist.name}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-lg font-semibold truncate">{playlist.name}</h2>
                <p className="text-sm text-gray-400 line-clamp-2 mt-1">
                  {playlist.description || "No description"}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
