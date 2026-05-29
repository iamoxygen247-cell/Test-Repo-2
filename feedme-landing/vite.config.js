import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Test-Repo-2/feedme-landing/',
  plugins: [react()],
})
