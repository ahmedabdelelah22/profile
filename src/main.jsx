import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ProfileCard from './App.jsx'

// التسجيل بالطريقة الـ Native المضمونة اللي مفيش مجمع أكواد يرفضها
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('SW registered: ', reg))
      .catch(err => console.log('SW registration failed: ', err));
  });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProfileCard />
  </StrictMode>,
)