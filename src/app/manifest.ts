import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mo's Soundboard",
    short_name: "Mo's Soundboard",
    description: 'A Web App for playing goofy sound effects',
    start_url: '/',
    display: 'standalone',
    background_color: '#1a103d',
    theme_color: '#130b30',
    icons: [
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}