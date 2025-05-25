import React from 'react';

const LoadingSpinner = ({ message = "Loading...", error = null }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      {!error ? (
        <>
          <svg
            className="animate-spin h-10 w-10 text-white mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
          <p className="text-white text-sm">{message}</p>
        </>
      ) : (
        <div className="text-red-400 text-sm">
          <p className="font-semibold mb-2">Error</p>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default LoadingSpinner;
