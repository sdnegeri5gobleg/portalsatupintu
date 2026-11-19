self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Membiarkan request langsung diteruskan ke jaringan
});
