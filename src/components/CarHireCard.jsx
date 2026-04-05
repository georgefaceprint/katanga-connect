import React from 'react';
import { useApp } from '../context/AppContext';
import { Star, MapPin, Gauge, Car, Users } from 'lucide-react';

const CarHireCard = ({ car, onBook }) => {
  const { lang, formatPrice, t } = useApp();

  return (
    <div className="glass fade-in" style={{ borderRadius: '24px', overflow: 'hidden', transition: 'transform 0.3s' }}>
      <div style={{ height: '220px', position: 'relative' }}>
        <img src={car.image} alt={car.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)', color: 'white', padding: '0.4rem 0.8rem', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem' }}>
          <Star size={14} fill="#FFD700" color="#FFD700" /> {car.rating}
        </div>
      </div>
      
      <div style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
          <h3 style={{ fontSize: '1.3rem' }}>{car.name}</h3>
          <div style={{ textAlign: 'right' }}>
             <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary)' }}>{formatPrice(car.priceUSD)}</span>
             <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>/{t('dailyRate')}</div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1rem' }}>
          <MapPin size={14} /> {car.city} • {car.proximity.join(', ')}
        </div>

        <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8rem', color: 'var(--text-secondary)', background: 'rgba(0,0,0,0.05)', padding: '0.3rem 0.6rem', borderRadius: '6px' }}>
            <Gauge size={14} /> {car.transmission}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8rem', color: 'var(--text-secondary)', background: 'rgba(0,0,0,0.05)', padding: '0.3rem 0.6rem', borderRadius: '6px' }}>
            <Users size={14} /> {car.capacity} {lang === 'en' ? 'Seats' : 'Sièges'}
          </div>
          {car.amenities.slice(0, 2).map(amenity => (
            <div key={amenity} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', background: 'rgba(22, 163, 74, 0.1)', padding: '0.3rem 0.6rem', borderRadius: '6px' }}>
              {amenity}
            </div>
          ))}
        </div>

        <button 
          className="btn btn-primary" 
          style={{ width: '100%', justifyContent: 'center', padding: '0.8rem', borderRadius: '12px' }}
          onClick={() => onBook(car)}
        >
          {t('confirmBooking') || 'Book Now'}
        </button>
      </div>
    </div>
  );
};

export default CarHireCard;
