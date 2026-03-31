import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// const isGitHubPages = process.env.NODE_ENV === 'production';
// 1
// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   base: isGitHubPages ? '/DigiTools_Platform/' : '/'
// })

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    // যদি আপনি GitHub-এ 'build' করেন, তবে রিপোজিটরির নাম হবে base
    // অন্যথায় (যেমন Netlify বা Local) এটি রুট '/' হিসেবে কাজ করবে
    base: mode === 'production' ? '/DigiTools_Platform/' : '/',
  }
})
