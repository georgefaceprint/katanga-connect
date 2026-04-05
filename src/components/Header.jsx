import React from 'react';
import { useApp } from '../context/AppContext';
import { Globe, DollarSign, LayoutDashboard, Building2, Menu } from 'lucide-react';

const Header = ({ setView }) => {
  const { lang, toggleLang, currency, toggleCurrency, t } = useApp();

  return (
    <header className="glass fade-in" style={{ 
      margin: '0', 
      position: 'sticky', 
      top: '0', 
      zIndex: 1000, 
      padding: '0.8rem 3rem', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      borderRadius: '0 0 24px 24px',
      borderTop: 'none',
      boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
    }}>
      {/* Brand Cluster */}
      <div className="brand" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer' }} onClick={() => setView('portal')}>
        <div style={{ 
          width: '42px', 
          height: '42px', 
          background: 'linear-gradient(135deg, #007FFF 0%, #CE1126 100%)', 
          borderRadius: '12px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0, 127, 255, 0.3)',
          border: '1.5px solid #FFD700'
        }}>
          <span style={{ color: '#FFD700', fontSize: '1.5rem', fontWeight: 'bold' }}>★</span>
        </div>
        <h2 className="brand-font" style={{ fontSize: '1.6rem', fontWeight: '800', letterSpacing: '-0.5px' }}>
          Katanga<span style={{ color: '#007FFF' }}>Connect</span>
        </h2>
      </div>

      {/* Nav Cluster */}
      <nav style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '0.5rem', background: 'rgba(0,0,0,0.03)', padding: '0.3rem', borderRadius: '40px', border: '1px solid var(--glass-border)' }}>
          <button 
            className="btn btn-secondary" 
            onClick={() => setView('onboard')} 
            style={{ padding: '0.6rem 1.2rem', borderRadius: '30px', border: 'none', background: 'transparent', fontSize: '0.85rem', fontWeight: '600' }}
          >
            <Building2 size={16} /> {t('onboardNav')}
          </button>
          <button 
            className="btn btn-secondary" 
            onClick={() => setView('admin')} 
            style={{ padding: '0.6rem 1.2rem', borderRadius: '30px', border: 'none', background: 'transparent', fontSize: '0.85rem', fontWeight: '600' }}
          >
            <LayoutDashboard size={16} /> {t('dashboard')}
          </button>
        </div>
        
        <div style={{ height: '24px', width: '1px', background: 'var(--glass-border)', margin: '0 0.5rem' }}></div>
        
        {/* Tools Cluster */}
        <div style={{ display: 'flex', gap: '0.4rem' }}>
          <button 
            className="btn btn-secondary" 
            onClick={toggleLang} 
            style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              padding: 0, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              border: '1px solid var(--glass-border)',
              background: 'white',
              fontSize: '0.7rem',
              fontWeight: 'bold',
              color: '#007FFF'
            }}
            title="Switch Language"
          >
            {lang.toUpperCase()}
          </button>
          
          <button 
            className="btn btn-secondary" 
            onClick={toggleCurrency} 
            style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              padding: 0, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              border: '1px solid var(--glass-border)',
              background: 'white',
              color: 'var(--primary)'
            }}
            title="Switch Currency"
          >
            <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>{currency === 'USD' ? '$' : 'FC'}</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
