import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, exchangeRate } from '../data/mockData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [lang, setLang] = useState('fr');
  const [currency, setCurrency] = useState('USD');
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState('stays'); // stays, activities, weddings

  
  // Translation Helper
  const t = (key) => translations[lang][key] || key;

  // Conversion Helper
  const formatPrice = (usdAmount) => {
    if (currency === 'CDF') {
      const amount = usdAmount * exchangeRate;
      return new Intl.NumberFormat('fr-CD', { style: 'currency', currency: 'CDF' }).format(amount);
    }
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(usdAmount);
  };

  const calculateLevy = (amount) => {
    // Flat 2% tourism tax across the board
    return amount * 0.02;
  };

  const calculateVAT = (amount) => amount * 0.07; // 7% VAT for accommodation

  const toggleLang = () => setLang(prev => prev === 'en' ? 'fr' : 'en');
  const toggleCurrency = () => setCurrency(prev => prev === 'USD' ? 'CDF' : 'USD');

  return (
    <AppContext.Provider value={{
      lang,
      setLang,
      currency,
      setCurrency,
      t,
      formatPrice,
      calculateLevy,
      calculateVAT,
      toggleLang,
      toggleCurrency,
      cart,
      setCart,
      activeCategory,
      setActiveCategory
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
