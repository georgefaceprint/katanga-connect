import React from 'react';
import { useApp } from '../context/AppContext';
import { X, SlidersHorizontal, Star, SortAsc, DollarSign } from 'lucide-react';

const FilterSection = ({ 
  onClose, 
  filters, 
  setFilters, 
  availableAmenities,
  maxPriceInRange 
}) => {
  const { t } = useApp();

  const toggleAmenity = (amenity) => {
    const newAmenities = filters.amenities.includes(amenity)
      ? filters.amenities.filter(a => a !== amenity)
      : [...filters.amenities, amenity];
    setFilters({ ...filters, amenities: newAmenities });
  };

  const handlePriceChange = (field, value) => {
    setFilters({ ...filters, [field]: value });
  };

  const clearAll = () => {
    setFilters({
      minPrice: 0,
      maxPrice: 10000,
      minRating: 0,
      sortBy: 'default',
      amenities: []
    });
  };

  return (
    <div className="glass fade-in" style={{ 
      padding: '2rem', 
      borderRadius: '24px', 
      marginTop: '1rem', 
      border: '1px solid var(--glass-border)',
      position: 'relative'
    }}>
      <button 
        onClick={onClose}
        style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}
      >
        <X size={20} />
      </button>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        {/* Price Range */}
        <div>
          <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <DollarSign size={18} color="var(--primary)" /> {t('priceRange') || 'Price Range'}
          </h4>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <input 
              type="number" 
              placeholder="Min"
              value={filters.minPrice || ''}
              onChange={(e) => handlePriceChange('minPrice', Number(e.target.value))}
              style={{ width: '100%', padding: '0.6rem', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.05)', color: 'var(--text-primary)' }}
            />
            <span>-</span>
            <input 
              type="number" 
              placeholder="Max"
              value={filters.maxPrice || ''}
              onChange={(e) => handlePriceChange('maxPrice', Number(e.target.value))}
              style={{ width: '100%', padding: '0.6rem', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.05)', color: 'var(--text-primary)' }}
            />
          </div>
        </div>

        {/* Rating */}
        <div>
          <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <Star size={18} color="var(--secondary)" /> {t('minRating') || 'Minimum Rating'}
          </h4>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {[3, 4, 5].map(star => (
              <button
                key={star}
                onClick={() => setFilters({ ...filters, minRating: filters.minRating === star ? 0 : star })}
                className={`btn ${filters.minRating === star ? 'btn-primary' : 'btn-secondary'}`}
                style={{ flex: 1, padding: '0.5rem' }}
              >
                {star}+ <Star size={14} fill={filters.minRating === star ? 'white' : 'transparent'} />
              </button>
            ))}
          </div>
        </div>

        {/* Sort By */}
        <div>
          <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <SortAsc size={18} color="var(--primary)" /> {t('sortBy') || 'Sort By'}
          </h4>
          <select 
            value={filters.sortBy}
            onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
            style={{ width: '100%', padding: '0.6rem', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.05)', color: 'var(--text-primary)', outline: 'none' }}
          >
            <option value="default" style={{background: 'var(--bg-primary)'}}>Default</option>
            <option value="price-low" style={{background: 'var(--bg-primary)'}}>Price: Low to High</option>
            <option value="price-high" style={{background: 'var(--bg-primary)'}}>Price: High to Low</option>
            <option value="rating-high" style={{background: 'var(--bg-primary)'}}>Rating: High to Low</option>
          </select>
        </div>
      </div>

      {/* Amenities Chips */}
      <div style={{ marginTop: '2rem' }}>
        <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <SlidersHorizontal size={18} color="var(--primary)" /> {t('amenities') || 'Amenities'}
        </h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
          {availableAmenities.map(amenity => (
            <button
              key={amenity}
              onClick={() => toggleAmenity(amenity)}
              style={{
                padding: '0.5rem 1.2rem',
                borderRadius: '50px',
                border: '1px solid var(--glass-border)',
                background: filters.amenities.includes(amenity) ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                color: filters.amenities.includes(amenity) ? 'white' : 'var(--text-primary)',
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {amenity}
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
        <button 
          onClick={clearAll}
          className="btn btn-secondary"
          style={{ padding: '0.6rem 1.5rem', borderRadius: '50px' }}
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
