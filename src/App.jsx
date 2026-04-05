import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import HotelCard from './components/HotelCard';
import HistoricalCard from './components/HistoricalCard';
import FilterSection from './components/FilterSection';
import BookingPanel from './components/BookingPanel';
import RevenueDashboard from './components/RevenueDashboard';
import ProviderOnboarding from './components/ProviderOnboarding';
import TshumaChatbot from './components/TshumaChatbot';
import { useApp } from './context/AppContext';
import { hotels, activities, weddings, restaurants, commonLocations, historicalSites, allHotelAmenities, allActivitiesAmenities } from './data/mockData';
import { Search, Map, Calendar, ShieldCheck, MapPin, Grid, HeartPulse, Landmark, SlidersHorizontal, X } from 'lucide-react';

function App() {
  const [view, setView] = useState('portal'); // portal, admin, onboard
  const [selectedHotel, setSelectedHotel] = useState(null);
  
  const [searchCity, setSearchCity] = useState('');
  const [searchAmenity, setSearchAmenity] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 10000,
    minRating: 0,
    sortBy: 'default',
    amenities: []
  });

  const { t, activeCategory, setActiveCategory } = useApp();

  // Combine data based on category
  const activeData = useMemo(() => {
    switch (activeCategory) {
      case 'stays': return hotels;
      case 'activities': return activities;
      case 'weddings': return weddings;
      case 'restaurants': return restaurants;
      case 'historicalSites': return historicalSites;
      default: return hotels;
    }
  }, [activeCategory]);

  const filteredItems = useMemo(() => {
    let result = activeData.filter(item => {
      // Location & Proximity search
      const matchesCity = searchCity === '' || 
        item.city.toLowerCase().includes(searchCity.toLowerCase()) || 
        (item.proximity && item.proximity.some(p => p.toLowerCase().includes(searchCity.toLowerCase())));
      
      // Keywords/Amenities search (from main bar)
      const matchesKeyword = searchAmenity === '' || 
        item.amenities.some(a => a.toLowerCase().includes(searchAmenity.toLowerCase())) ||
        item.name.toLowerCase().includes(searchAmenity.toLowerCase());

      // Status
      const isApproved = item.status === 'Approved';

      // Advanced Filters
      const price = item.priceUSD || (item.rooms && Math.min(...item.rooms.map(r => r.priceUSD))) || 0;
      const matchesPrice = price >= filters.minPrice && price <= filters.maxPrice;
      const matchesRating = !item.rating || item.rating >= filters.minRating;
      const matchesSelectedAmenities = filters.amenities.length === 0 || 
        filters.amenities.every(a => item.amenities.includes(a));

      return matchesCity && matchesKeyword && isApproved && matchesPrice && matchesRating && matchesSelectedAmenities;
    });

    // Sorting
    if (filters.sortBy === 'price-low') {
      result.sort((a, b) => {
        const priceA = a.priceUSD || (a.rooms && Math.min(...a.rooms.map(r => r.priceUSD))) || 0;
        const priceB = b.priceUSD || (b.rooms && Math.min(...b.rooms.map(r => r.priceUSD))) || 0;
        return priceA - priceB;
      });
    } else if (filters.sortBy === 'price-high') {
      result.sort((a, b) => {
        const priceA = a.priceUSD || (a.rooms && Math.min(...a.rooms.map(r => r.priceUSD))) || 0;
        const priceB = b.priceUSD || (b.rooms && Math.min(...b.rooms.map(r => r.priceUSD))) || 0;
        return priceB - priceA;
      });
    } else if (filters.sortBy === 'rating-high') {
      result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }

    return result;
  }, [activeData, searchCity, searchAmenity, filters]);

  return (
    <div className="app-container">
      <Header setView={setView} />
      
      {view === 'portal' ? (
        <main>
          {/* Header Navigation for Categories */}
          <section className="container" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
             {[
               { id: 'stays', icon: <Building2Icon size={18} />, label: t('stays') },
               { id: 'activities', icon: <MapPin size={18} />, label: t('activities') },
               { id: 'weddings', icon: <HeartPulse size={18} />, label: t('weddings') },
               { id: 'restaurants', icon: <UtensilsIcon size={18} />, label: t('restaurants') },
               { id: 'historicalSites', icon: <Landmark size={18} />, label: t('historicalSites') }
             ].map(cat => (
               <button 
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)} 
                className={`btn ${activeCategory === cat.id ? 'btn-primary' : 'btn-secondary'}`}
                style={{ 
                  borderRadius: '12px', 
                  padding: '0.8rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  border: activeCategory === cat.id ? 'none' : '1px solid var(--glass-border)',
                  boxShadow: activeCategory === cat.id ? '0 4px 15px rgba(22, 163, 74, 0.3)' : 'none',
                  transition: 'all 0.3s ease'
                }}
               >
                  {cat.icon} {cat.label}
               </button>
             ))}
          </section>

          {/* Hero Section */}
          <section style={{ height: '50vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '30px', margin: '0 2rem' }}>
            <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
               <img src="https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80&w=2000" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.2 }} />
               <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(244,247,246,0) 0%, rgba(244,247,246,1) 100%)' }}></div>
            </div>
            
            <div className="container" style={{ textAlign: 'center' }}>
              <h1 className="fade-in" style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', lineHeight: '1.1' }}>
                {t('portalTitle')}
              </h1>
              <p className="fade-in" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem', animationDelay: '0.2s' }}>
                {t('portalSubtitle')}
              </p>
              
              {/* Filter Bar */}
              <div className="glass fade-in" style={{ display: 'flex', maxWidth: '900px', margin: '0 auto', padding: '0.8rem', gap: '1rem', alignItems: 'center', borderRadius: '50px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingLeft: '1.5rem', flex: 1, borderRight: '1px solid var(--glass-border)' }}>
                   <Map size={20} color="var(--secondary)" />
                   <input type="text" list="locations" value={searchCity} onChange={(e) => setSearchCity(e.target.value)} placeholder={t('location') + " (City or nearby)"} style={{ background: 'none', border: 'none', color: 'var(--text-primary)', width: '100%', outline: 'none' }} />
                   <datalist id="locations">
                     {commonLocations.map(loc => <option key={loc} value={loc} />)}
                   </datalist>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0 1rem', flex: 1, borderRight: '1px solid var(--glass-border)' }}>
                   <Grid size={20} color="var(--secondary)" />
                    <input type="text" value={searchAmenity} onChange={(e) => setSearchAmenity(e.target.value)} placeholder={t('searchPlaceholder') || "Find hotels, activities..."} style={{ background: 'none', border: 'none', color: 'var(--text-primary)', width: '100%', outline: 'none' }} />
                </div>
                 <div style={{ padding: '0 1rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  {(searchCity || searchAmenity || filters.amenities.length > 0 || filters.minRating > 0 || filters.minPrice > 0 || filters.maxPrice < 10000) && (
                    <button 
                      onClick={() => {
                        setSearchCity('');
                        setSearchAmenity('');
                        setFilters({ minPrice: 0, maxPrice: 10000, minRating: 0, sortBy: 'default', amenities: [] });
                      }}
                      className="btn btn-secondary"
                      style={{ borderRadius: '50%', width: '40px', height: '40px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      title="Reset All"
                    >
                      <X size={18} />
                    </button>
                  )}
                  <button 
                    onClick={() => setShowFilters(!showFilters)}
                    className={`btn ${showFilters ? 'btn-primary' : 'btn-secondary'}`}
                    style={{ borderRadius: '50%', padding: '0.8rem', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <SlidersHorizontal size={20} />
                  </button>
                  <button className="btn btn-primary" style={{ borderRadius: '40px', padding: '0.8rem 2rem' }}>
                    <Search size={18} /> {t('search') || 'Search'}
                  </button>
                </div>
              </div>

              {/* Advanced Filter Section */}
              {showFilters && (
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                  <FilterSection 
                    onClose={() => setShowFilters(false)}
                    filters={filters}
                    setFilters={setFilters}
                    availableAmenities={activeCategory === 'stays' ? allHotelAmenities : allActivitiesAmenities}
                  />
                </div>
              )}
            </div>
          </section>

          {/* Grid */}
          <section className="container" style={{ padding: '4rem 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
              <div>
                <h2 style={{ fontSize: '2.5rem' }}>
                  {t(activeCategory)}
                  <span style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginLeft: '1rem', fontWeight: '400' }}>
                    ({filteredItems.length} {t('results') || 'results'})
                  </span>
                </h2>
                <div style={{ height: '4px', width: '60px', background: 'var(--secondary)', marginTop: '0.5rem' }}></div>
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                 <ShieldCheck size={18} color="var(--primary)" />
                 Direct Provincial Remittance
              </div>
            </div>
            
            <div className="dashboard-grid">
              {filteredItems.length > 0 ? filteredItems.map(item => (
                activeCategory === 'historicalSites' ? 
                  <HistoricalCard key={item.id} site={item} />
                  :
                  <HotelCard key={item.id} hotel={item} onBook={setSelectedHotel} category={activeCategory} />
              )) : (
                <div style={{ padding: '4rem 2rem', textAlign: 'center', gridColumn: '1 / -1', border: '1px dashed var(--glass-border)', borderRadius: '20px' }}>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.2rem' }}>
                    No active listings found matching your criteria.
                  </p>
                  <button 
                    className="btn btn-primary" 
                    style={{ borderRadius: '30px', padding: '0.8rem 2rem' }}
                    onClick={() => {
                       setSearchCity('');
                       setSearchAmenity('');
                       setFilters({ minPrice: 0, maxPrice: 10000, minRating: 0, sortBy: 'default', amenities: [] });
                    }}
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </section>
        </main>
      ) : view === 'onboard' ? (
        <ProviderOnboarding setView={setView} />
      ) : (
        <RevenueDashboard />
      )}

      {selectedHotel && (
        <BookingPanel 
          hotel={selectedHotel} 
          category={activeCategory}
          onClose={() => setSelectedHotel(null)} 
        />
      )}

      <TshumaChatbot />

    </div>
  );
}

// Inline Icon to keep it clean
function Building2Icon(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>;
}

function UtensilsIcon(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>;
}

export default App;
