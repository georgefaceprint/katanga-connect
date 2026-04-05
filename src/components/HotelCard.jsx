import React from 'react';
import { useApp } from '../context/AppContext';
import { Star, MapPin, CheckCircle2 } from 'lucide-react';

const HotelCard = ({ hotel, onBook, category }) => {
  const { lang, formatPrice, t } = useApp();
  
  const displayPrice = hotel.priceUSD || (hotel.rooms && hotel.rooms[0] ? hotel.rooms[0].priceUSD : 0);
  const ratingLabel = hotel.rating ? `${hotel.rating}.0` : 'Top Rated';

  return (
    <div className="glass fade-in" style={{ overflow: 'hidden', transition: 'transform 0.3s ease', cursor: 'default' }}>
      <div style={{ height: '220px', position: 'relative' }}>
        <img src={hotel.image} alt={hotel.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        {hotel.rating && (
          <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(0,0,0,0.6)', padding: '0.3rem 0.8rem', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '0.3rem', backdropFilter: 'blur(4px)', color: 'white' }}>
            <Star size={14} fill="#FFD700" color="#FFD700" />
            <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{hotel.rating}.0</span>
          </div>
        )}
      </div>
      
      <div style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary)', marginBottom: '0.5rem' }}>
          <MapPin size={16} />
          <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{hotel.city}, Katanga</span>
        </div>
        
        <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem' }}>{hotel.name}</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.8rem', minHeight: '3.5rem' }}>
          {hotel.description[lang]}
        </p>

        {hotel.pointsOfInterest && hotel.pointsOfInterest.length > 0 && (
          <div style={{ marginBottom: '1rem', background: 'rgba(0,0,0,0.02)', padding: '0.6rem', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '0.4rem', color: 'var(--secondary)' }}>{t('distance')}</div>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              {hotel.pointsOfInterest.map(poi => (
                <li key={poi.name}>
                  {poi.name}: <strong>{poi.distance}</strong>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {hotel.amenities.map(amenity => (
            <span key={amenity} style={{ fontSize: '0.7rem', background: 'rgba(0,0,0,0.05)', padding: '0.2rem 0.6rem', borderRadius: '4px', border: '1px solid var(--glass-border)' }}>
              {amenity}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid var(--glass-border)' }}>
          <div>
            <span style={{ fontSize: '1.6rem', fontWeight: 'bold', color: 'var(--primary)' }}>{formatPrice(displayPrice)}</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}> {category === 'stays' ? 'per night (from)' : ''}</span>
          </div>
          <button className="btn btn-primary" onClick={() => onBook(hotel)}>
             {category === 'stays' ? t('secureStay') : t('bookService')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
