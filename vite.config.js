import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/metro-learn/',
  plugins: [react()],
  base: '/metro-learn/'  // Add this line - must match your repo name!
})