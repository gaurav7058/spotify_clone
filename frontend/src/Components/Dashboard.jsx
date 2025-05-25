import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';

const Dashboard = () => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await axios.get(
          'https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n/tracks',
          {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          }
        );
        setTracks(response.data.items);
        console.log(response.data.items);
      } catch (error) {
        console.error('Error fetching tracks:', error);
        if (error.response?.status === 401) {
          localStorage.removeItem('accessToken');
          window.location.href = '/';
        }
      } finally {
        setLoading(false);
      }
    };

    if (accessToken) {
      fetchTracks();
    }
  }, [accessToken]);

  if (loading) return <LoadingSpinner message="Loading playlist tracks..." />;

  return (
    <div className="bg-gray-900 min-h-screen p-6 text-white">
      <h1 className="text-3xl font-bold text-center mb-8">Tracks in the Playlist</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {tracks.map((item, index) => {
          const track = item.track;
          return (
            <div
              key={track.id || index}
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
            >
              {track.album.images?.[0]?.url && (
                <img
                  src={track.album.images[0].url}
                  alt={track.name}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-lg font-semibold">{track.name}</h2>
                <p className="text-sm text-gray-400 mt-1">
                  {track.artists.map((artist) => artist.name).join(', ')}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
