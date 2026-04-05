import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Users } from 'lucide-react';

const BookingPanel = ({ hotel, category, onClose }) => {
  const { lang, formatPrice, calculateLevy, calculateVAT, t } = useApp();
  
  // Stays Booking State: roomType ID -> quantity
  const [selectedRooms, setSelectedRooms] = useState({});
  // Activities/Weddings Booking State
  const [guests, setGuests] = useState(1);
  const [nights, setNights] = useState(1);
  const [showConfirm, setShowConfirm] = useState(false);

  // Compute Subtotal
  let subtotal = 0;
  if (category === 'stays' && hotel.rooms) {
    hotel.rooms.forEach(room => {
      const q = selectedRooms[room.id] || 0;
      subtotal += q * room.priceUSD * nights;
    });
  } else {
    subtotal = hotel.priceUSD * guests; // Simplistic pricing for events/activities
  }

  const tax = calculateLevy(subtotal); // 2% Tourism Tax for all categories (simplified per user instructions)
  const vat = calculateVAT(subtotal);
  const total = subtotal + tax + vat;

  const handleRoomChange = (roomId, increment) => {
    const current = selectedRooms[roomId] || 0;
    const room = hotel.rooms.find(r => r.id === roomId);
    let newVal = current + increment;
    if (newVal < 0) newVal = 0;
    if (newVal > room.available) newVal = room.available;
    setSelectedRooms({ ...selectedRooms, [roomId]: newVal });
  };

  const handleBook = () => {
    setShowConfirm(true);
  };

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', justifyContent: 'flex-end' }}>
      <div className="glass fade-in" style={{ width: '100%', maxWidth: '450px', height: '100%', borderRight: 'none', borderRadius: '20px 0 0 20px', padding: '2rem', display: 'flex', flexDirection: 'column', background: 'var(--bg-light)' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.4rem' }}>{category === 'stays' ? t('secureStay') : t('bookService')}</h3>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}>
            <X size={24} />
          </button>
        </div>

        <h2 style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }}>{hotel.name}</h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>{hotel.description[lang]}</p>

        <div style={{ flex: 1, overflowY: 'auto', paddingRight: '1rem',  }}>
          {showConfirm ? (
             <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <div style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1rem' }}>✓</div>
                <h3 style={{ marginBottom: '1rem' }}>Booking Confirmed</h3>
                <p>An inspector alert has been lodged.</p>
                <button className="btn btn-primary" onClick={onClose} style={{ marginTop: '2rem' }}>Close</button>
             </div>
          ) : (
             <>
                {category === 'stays' && hotel.rooms ? (
                    <div style={{ marginBottom: '2rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Nights</label>
                            <input type="number" min="1" value={nights} onChange={e => setNights(parseInt(e.target.value) || 1)} style={{ width: '60px', padding: '0.2rem', background: 'none', border: '1px solid var(--glass-border)', color: 'var(--text-primary)', borderRadius: '5px' }} />
                        </div>

                        <h4 style={{ marginBottom: '1rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>Select Rooms</h4>
                        {hotel.rooms.map(room => {
                            const q = selectedRooms[room.id] || 0;
                            return (
                                <div key={room.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.8rem', background: 'rgba(0,0,0,0.03)', borderRadius: '10px', marginBottom: '0.5rem' }}>
                                    <div style={{ width: '60%' }}>
                                        <div style={{ fontWeight: 'bold' }}>{room.type}</div>
                                        <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Capacity: {room.capacity} | Avail: {room.available}</div>
                                        <div style={{ color: 'var(--primary)', fontSize: '0.9rem' }}>{formatPrice(room.priceUSD)} / night</div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--card-bg)', padding: '0.3rem', borderRadius: '8px' }}>
                                        <button onClick={() => handleRoomChange(room.id, -1)} style={{ border: 'none', background: 'none', color: 'var(--text-primary)', cursor: 'pointer', padding: '0 0.5rem' }}>-</button>
                                        <span style={{ minWidth: '20px', textAlign: 'center' }}>{q}</span>
                                        <button onClick={() => handleRoomChange(room.id, 1)} style={{ border: 'none', background: 'none', color: 'var(--text-primary)', cursor: 'pointer', padding: '0 0.5rem' }}>+</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    <div style={{ marginBottom: '2rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.8rem', background: 'rgba(0,0,0,0.03)', borderRadius: '10px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                <Users size={18} />
                                <span>Guests / Attendees</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--card-bg)', padding: '0.3rem', borderRadius: '8px' }}>
                                <button onClick={() => setGuests(Math.max(1, guests - 1))} style={{ border: 'none', background: 'none', color: 'var(--text-primary)', cursor: 'pointer', padding: '0 0.5rem' }}>-</button>
                                <span>{guests}</span>
                                <button onClick={() => setGuests(guests + 1)} style={{ border: 'none', background: 'none', color: 'var(--text-primary)', cursor: 'pointer', padding: '0 0.5rem' }}>+</button>
                            </div>
                        </div>
                    </div>
                )}
             </>
          )}

        </div>

        {!showConfirm && (
            <div style={{ marginTop: 'auto', borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>{t('basePrice')}</span>
                <span>{formatPrice(subtotal)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--accent)' }}>{t('tourismLevy')}</span>
                <span style={{ color: 'var(--accent)' }}>{formatPrice(tax)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>{t('vat')}</span>
                <span>{formatPrice(vat)}</span>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                <span>{t('total')}</span>
                <span style={{ color: 'var(--primary)' }}>{formatPrice(total)}</span>
            </div>

            <div style={{ marginBottom: '1rem' }} />

            <button 
                className="btn btn-primary" 
                style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}
                onClick={handleBook}
                disabled={subtotal === 0}
            >
                {t('confirmBooking')}
            </button>
            </div>
        )}
      </div>
    </div>
  );
};

export default BookingPanel;
