import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, Upload, CheckCircle2 } from 'lucide-react';

const ProviderOnboarding = ({ setView }) => {
  const { lang, t } = useApp();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="container" style={{ padding: '4rem 0', maxWidth: '600px' }}>
      <div className="glass fade-in" style={{ padding: '3rem', borderRadius: '20px' }}>
        
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
             <CheckCircle2 size={64} color="var(--primary)" style={{ margin: '0 auto 1.5rem' }} />
             <h2 style={{ marginBottom: '1rem' }}>Application Submitted</h2>
             <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
               Your facility has been submitted for review by the Katanga Tourism Inspectorate. 
               You will be notified once compliance checks are passed and you are onboarded to the portal.
             </p>
             <button className="btn btn-primary" onClick={() => setView('portal')}>
               Return to Portal
             </button>
          </div>
        ) : (
          <>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <ShieldCheck size={48} color="var(--secondary)" style={{ margin: '0 auto 1rem' }} />
              <h2>{t('onboardNav')}</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Join the Katanga Destination Ecosystem. Mandated for all Lodges, Mine Tour Companies, and Event Venues to ensure tax compliance.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Business Registration Number (RCCM)</label>
                <input required type="text" placeholder="e.g. RCCM/KIP/2026" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.02)', outline: 'none', color: 'var(--text-primary)' }} />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Facility Type</label>
                <select style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'var(--bg-light)', outline: 'none', color: 'var(--text-primary)' }}>
                  <option>Accommodation (Hotel / BnB)</option>
                  <option>Tour Company (Mine / Heritage)</option>
                  <option>Event/Wedding Venue</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Facility Name</label>
                <input required type="text" placeholder="e.g. Pullman Kolwezi" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.02)', outline: 'none', color: 'var(--text-primary)' }} />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Expected Capacity (Beds / Attendees)</label>
                <input required type="number" placeholder="0" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.02)', outline: 'none', color: 'var(--text-primary)' }} />
              </div>

              <div style={{ padding: '1rem', border: '1px dashed var(--glass-border)', borderRadius: '8px', textAlign: 'center', color: 'var(--text-secondary)' }}>
                 <Upload size={24} style={{ marginBottom: '0.5rem' }} />
                 <div>Upload Registration Documents</div>
              </div>

              <button className="btn btn-primary" type="submit" style={{ justifyContent: 'center', padding: '1rem', marginTop: '1rem' }}>
                {t('submitApp')}
              </button>

            </form>
          </>
        )}
      </div>
    </main>
  );
};

export default ProviderOnboarding;
