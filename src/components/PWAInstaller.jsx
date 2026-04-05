import React, { useState, useEffect } from 'react';
import { Download, X, Star } from 'lucide-react';
import { useApp } from '../context/AppContext';

const PWAInstaller = () => {
  const { lang, t } = useApp();
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
      // Update UI notify the user they can install the PWA
      setShowPrompt(true);
    });

    window.addEventListener('appinstalled', () => {
      // Log install to analytics
      console.log('INSTALL: Success');
      setShowPrompt(false);
    });
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`INSTALL: ${outcome}`);
    // We've used the prompt, and can't use it again, throw it away
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  if (!showPrompt) return null;

  return (
    <div className="glass fade-in" style={{ 
      position: 'fixed', 
      bottom: '1.5rem', 
      left: '50%', 
      transform: 'translateX(-50%)',
      width: '90%', 
      maxWidth: '400px',
      padding: '1rem',
      zIndex: 2000,
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      border: '2.5px solid #FFD700',
      background: 'rgba(255, 255, 255, 0.95)',
      boxShadow: '0 12px 48px rgba(0, 127, 255, 0.3)'
    }}>
      <div style={{ 
        width: '50px', 
        height: '50px', 
        background: '#007FFF', 
        borderRadius: '12px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        flexShrink: 0
      }}>
        <Star color="#FFD700" size={24} fill="#FFD700" />
      </div>
      
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 'bold', fontSize: '0.95rem', color: '#007FFF' }}>
          {lang === 'en' ? 'Add Katanga Connect' : 'Ajouter Katanga Connect'}
        </div>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
          {lang === 'en' ? 'Install the app for a faster journey.' : 'Installez l\'appli pour un voyage plus rapide.'}
        </div>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button 
          onClick={handleInstallClick}
          className="btn btn-primary"
          style={{ padding: '0.5rem 0.8rem', fontSize: '0.8rem', borderRadius: '8px' }}
        >
          <Download size={14} /> {lang === 'en' ? 'Install' : 'Installer'}
        </button>
        <button 
          onClick={() => setShowPrompt(false)}
          style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default PWAInstaller;
