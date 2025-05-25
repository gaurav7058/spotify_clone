import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import React from 'react'
export default defineConfig({
  plugins: [
    tailwindcss(),
   
  ],
  server: {
    host: '0.0.0.0',
    port: 5173, // Optional; Render may override this with an environment variable like PORT
  }
})