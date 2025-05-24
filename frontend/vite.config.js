import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import React from 'react'
export default defineConfig({
  plugins: [
    tailwindcss(),
   
  ],
  server : {
    host: '127.0.0.1',
    
  }
})