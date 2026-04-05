import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { chatbotData, getDistance } from '../data/chatbotData';
import { MessageSquare, X, Send, RotateCcw, Trash2, MapPin } from 'lucide-react';

const TshumaChatbot = () => {
  const { lang, t } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const data = chatbotData[lang];

  // Initialize with welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ sender: 'bot', text: data.welcome }]);
    }
  }, [lang]);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (text) => {
    if (!text.trim()) return;

    const newMessages = [...messages, { sender: 'user', text }];
    setMessages(newMessages);
    setInput('');

    // Process Bot Response
    setTimeout(() => {
      const botResponse = processQuery(text);
      setMessages([...newMessages, { sender: 'bot', text: botResponse }]);
    }, 600);
  };

  const processQuery = (query) => {
    const q = query.toLowerCase();

    // Distance Logic
    const distance = getDistance(q);
    if (distance) {
      return lang === 'en' 
        ? `The estimated distance from Lubumbashi City Center is about ${distance}.` 
        : `La distance estimée depuis le centre-ville de Lubumbashi est d'environ ${distance}.`;
    }

    // Intent Logic (Keywords)
    for (const intent of data.intents) {
      if (intent.keywords.some(k => q.includes(k))) {
        return intent.answer;
      }
    }

    return data.noMatch;
  };

  const resetChat = () => {
    setMessages([{ sender: 'bot', text: data.reset }]);
  };

  return (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 1100 }}>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="btn"
        style={{ 
          width: '60px', 
          height: '60px', 
          borderRadius: '50%', 
          padding: 0, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #007FFF 0%, #CE1126 100%)',
          color: 'white',
          boxShadow: '0 8px 32px rgba(0, 127, 255, 0.4)',
          border: '2px solid #FFD700',
          transition: 'transform 0.3s',
          cursor: 'pointer'
        }}
      >
        {isOpen ? <X size={24} /> : <div style={{ position: 'relative' }}><MessageSquare size={24} /><div style={{ position: 'absolute', top: '-10px', right: '-10px', color: '#FFD700' }}>★</div></div>}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="glass fade-in" style={{ 
          position: 'absolute', 
          bottom: '80px', 
          right: 0, 
          width: '350px', 
          height: '500px', 
          display: 'flex', 
          flexDirection: 'column', 
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 12px 48px rgba(0,0,0,0.3)',
          border: '1px solid rgba(255, 215, 0, 0.3)',
          background: 'rgba(0, 127, 255, 0.1)',
          backdropFilter: 'blur(20px)'
        }}>
          {/* Header with Congo Flag Look */}
          <div style={{ 
            padding: '1.2rem', 
            background: '#007FFF', 
            position: 'relative',
            overflow: 'hidden',
            color: 'white', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center' 
          }}>
            {/* Red Diagonal Stripe */}
            <div style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '200%', 
                height: '100%', 
                background: 'linear-gradient(135deg, transparent 45%, #FFD700 45%, #FFD700 47%, #CE1126 47%, #CE1126 53%, #FFD700 53%, #FFD700 55%, transparent 55%)',
                opacity: 0.8,
                pointerEvents: 'none'
            }}></div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', position: 'relative', zIndex: 1 }}>
              <div style={{ width: '32px', height: '32px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #FFD700' }}>
                <span style={{ color: '#FFD700', fontSize: '1.2rem' }}>★</span>
              </div>
              <div>
                <div style={{ fontWeight: 'bold', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>Tshuma AI</div>
                <div style={{ fontSize: '0.7rem', opacity: 0.9 }}>Fierement Congolais</div>
              </div>
            </div>
            <button onClick={resetChat} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', position: 'relative', zIndex: 1 }} title="Reset">
              <RotateCcw size={18} />
            </button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem', background: 'rgba(255,255,255,0.02)' }}>
            {messages.map((m, i) => (
              <div key={i} style={{ 
                alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '85%',
                padding: '0.8rem 1rem',
                borderRadius: m.sender === 'user' ? '18px 18px 2px 18px' : '18px 18px 18px 2px',
                background: m.sender === 'user' ? '#007FFF' : 'rgba(255,255,255,0.1)',
                color: 'white',
                fontSize: '0.9rem',
                lineHeight: '1.4',
                border: m.sender === 'user' ? '1px solid rgba(255,215,0,0.5)' : '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}>
                {m.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestion Chips */}
          <div style={{ padding: '0.5rem 1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', borderTop: '1px solid rgba(255,215,0,0.2)', background: 'rgba(0,0,0,0.05)' }}>
             {data.suggestions.map((s, i) => (
               <button 
                  key={i} 
                  onClick={() => handleSend(s)}
                  style={{ 
                    fontSize: '0.7rem', 
                    padding: '0.4rem 0.8rem', 
                    borderRadius: '20px', 
                    border: '1px solid rgba(255,215,0,0.3)', 
                    background: 'rgba(0, 127, 255, 0.1)', 
                    color: '#FFD700',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={(e) => e.target.style.background = 'rgba(0, 127, 255, 0.3)'}
                  onMouseOut={(e) => e.target.style.background = 'rgba(0, 127, 255, 0.1)'}
               >
                 {s}
               </button>
             ))}
          </div>

          {/* Input Bar */}
          <div style={{ padding: '1rem', borderTop: '1px solid var(--glass-border)', display: 'flex', gap: '0.5rem' }}>
             <input 
               type="text" 
               value={input}
               onChange={(e) => setInput(e.target.value)}
               onKeyPress={(e) => e.key === 'Enter' && handleSend(input)}
               placeholder={lang === 'en' ? "Type a question..." : "Posez une question..."}
               style={{ flex: 1, padding: '0.6rem 1rem', borderRadius: '40px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.03)', color: 'var(--text-primary)', outline: 'none' }}
             />
             <button 
                onClick={() => handleSend(input)}
                className="btn btn-primary" 
                style={{ width: '38px', height: '38px', padding: 0, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
             >
               <Send size={16} />
             </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TshumaChatbot;
