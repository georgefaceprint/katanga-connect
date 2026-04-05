import React from 'react';
import { useApp } from '../context/AppContext';
import { Globe, DollarSign, LayoutDashboard, Building2, Menu } from 'lucide-react';

const Header = ({ setView }) => {
  const { lang, toggleLang, currency, toggleCurrency, t } = useApp();

  return (
    <header className="glass" style={{ margin: '1rem', position: 'sticky', top: '1rem', zIndex: 1000, padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div className="brand" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }} onClick={() => setView('portal')}>
        <div style={{ width: '40px', height: '40px', background: 'var(--secondary)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Building2 color="white" />
        </div>
        <h2 className="brand-font" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Katanga<span style={{ color: 'var(--secondary)' }}>Connect</span></h2>
      </div>

      <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <button className="btn btn-secondary" onClick={() => setView('onboard')} style={{ padding: '0.5rem 1rem' }}>
          <Building2 size={18} /> {t('onboardNav')}
        </button>
        <button className="btn btn-secondary" onClick={() => setView('admin')} style={{ padding: '0.5rem 1rem' }}>
          <LayoutDashboard size={18} /> {t('dashboard')}
        </button>
        
        <div style={{ height: '30px', width: '1px', background: 'var(--glass-border)' }}></div>
        
        <button className="btn btn-secondary" onClick={toggleLang} style={{ border: 'none' }}>
          <Globe size={18} /> {lang.toUpperCase()}
        </button>
        
        <button className="btn btn-secondary" onClick={toggleCurrency} style={{ border: 'none' }}>
          <DollarSign size={18} /> {currency}
        </button>
      </nav>
    </header>
  );
};

export default Header;
