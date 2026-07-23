import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // 환경변수는 리포 루트 .env 공용(README 참조) — VITE_ 접두사만 클라이언트에 노출됨
  envDir: '../..',
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:8000',
    },
  },
});
