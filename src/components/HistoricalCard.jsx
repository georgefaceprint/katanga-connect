import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MapPin, Library, Heart, BookmarkPlus, Check } from 'lucide-react';

const HistoricalCard = ({ site }) => {
  const { lang, t } = useApp();
  const [added, setAdded] = useState(false);

  return (
    <div className="glass fade-in" style={{ overflow: 'hidden', transition: 'transform 0.3s ease', cursor: 'default', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: '240px', position: 'relative' }}>
        <img src={site.image} alt={site.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(0,0,0,0.6)', padding: '0.3rem 0.8rem', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '0.4rem', backdropFilter: 'blur(4px)', color: 'white' }}>
          <Library size={14} color="var(--primary)" />
          <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Heritage Site</span>
        </div>
      </div>
      
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary)', marginBottom: '0.5rem' }}>
          <MapPin size={16} />
          <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{site.city}, Katanga</span>
        </div>
        
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.2rem', color: 'var(--text-primary)' }}>{site.name}</h3>
        
        <div style={{ marginBottom: '1rem' }}>
          <h4 style={{ fontSize: '1rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>{t('history')}</h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
            {site.history[lang]}
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem', flex: 1 }}>
          <h4 style={{ fontSize: '1rem', color: 'var(--secondary)', marginBottom: '0.5rem' }}>{t('whyVisit')}</h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
            {site.whyVisit[lang]}
          </p>
        </div>

        <div style={{ paddingTop: '1.2rem', borderTop: '1px solid var(--glass-border)' }}>
          <button 
            className={`btn ${added ? 'btn-secondary' : 'btn-primary'}`} 
            style={{ width: '100%', py: '0.8rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
            onClick={() => setAdded(!added)}
          >
             {added ? <Check size={18} /> : <BookmarkPlus size={18} />}
             {added ? 'Added to Itinerary' : t('addToItinerary')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HistoricalCard; 
