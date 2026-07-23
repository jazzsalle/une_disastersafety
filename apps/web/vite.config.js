import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // 환경변수는 리포 루트 .env 공용(README 참조) — VITE_ 접두사만 클라이언트에 노출됨
  envDir: '../..',
  plugins: [react()],
  server: {
    host: true, // LAN 접속 허용(내부 IP 데모용) — API는 아래 프록시 경유라 백엔드는 localhost 유지
    port: 5173,
    proxy: {
      '/api': 'http://localhost:8000',
    },
  },
});
