import React from 'react';
import { useApp } from '../context/AppContext';
import { LayoutDashboard, TrendingUp, Users, Map, PieChart as PieChartIcon, ArrowUpRight, DollarSign, Building } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area } from 'recharts';

const RevenueDashboard = () => {
  const { lang, formatPrice, t } = useApp();

  const salesData = [
    { name: 'Lubumbashi', value: 450000 },
    { name: 'Kolwezi', value: 320000 },
    { name: 'Likasi', value: 120000 },
    { name: 'Pweto', value: 65000 },
  ];

  const monthlyTax = [
    { month: 'Jan', tax: 42000 },
    { month: 'Feb', tax: 38000 },
    { month: 'Mar', tax: 45000 },
    { month: 'Apr', tax: 51000 },
    { month: 'May', tax: 49000 },
    { month: 'Jun', tax: 58000 },
  ];

  const segmentData = [
    { name: 'Business', value: 65 },
    { name: 'Leisure', value: 25 },
    { name: 'Government', value: 10 },
  ];

  const COLORS = ['#2E8B57', '#B87333', '#FFD700', '#FF8042'];

  return (
    <div className="fade-in" style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }} className="copper-gradient">{t('governancePortal')}</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Destination Management & Tax Revenue Tracking for Katanga Province</p>
        </div>
        <div style={{ textAlign: 'right' }}>
             <p style={{ fontSize: '0.8rem', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '1px' }}>Last Data Sync</p>
             <p style={{ fontWeight: 'bold', color: 'var(--primary)' }}>Now - 2026.04.05 10:52</p>
        </div>
      </div>

      {/* Hero Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        {[
          { label: t('totalRevenue'), value: formatPrice(1245000), icon: <DollarSign />, trend: '+12.5%' },
          { label: t('totalLevy'), value: formatPrice(98450), icon: <TrendingUp />, trend: '+8.2%' },
          { label: t('occupancy'), value: '82%', icon: <Building />, trend: '-2.1%' },
          { label: t('segmentation'), value: 'Intl: 45%', icon: <Users />, trend: '+5.7%' }
        ].map((stat, i) => (
          <div key={i} className="glass stat-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ padding: '0.5rem', background: 'rgba(0,0,0,0.05)', borderRadius: '8px' }}>{stat.icon}</div>
                <div style={{ fontSize: '0.8rem', color: stat.trend.startsWith('+') ? '#4ade80' : '#f87171', display: 'flex', alignItems: 'center' }}>
                    <ArrowUpRight size={14} /> {stat.trend}
                </div>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{stat.label}</p>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', margin: '0.2rem 0' }}>{stat.value}</h3>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
        {/* Main Chart */}
        <div className="glass" style={{ padding: '1.5rem' }}>
          <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><TrendingUp size={20} /> {t('taxTarget')}</h3>
          <div style={{ width: '100%', height: '300px' }}>
            <ResponsiveContainer>
              <AreaChart data={monthlyTax}>
                <defs>
                  <linearGradient id="colorTax" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2E8B57" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#2E8B57" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                <XAxis dataKey="month" stroke="var(--text-secondary)" fontSize={12} />
                <YAxis stroke="var(--text-secondary)" fontSize={12} />
                <Tooltip contentStyle={{ background: '#1E1E1E', border: '1px solid var(--glass-border)', borderRadius: '8px' }} />
                <Area type="monotone" dataKey="tax" stroke="#2E8B57" fillOpacity={1} fill="url(#colorTax)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="glass" style={{ padding: '1.5rem' }}>
          <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><PieChartIcon size={20} /> {t('segmentation')}</h3>
          <div style={{ width: '100%', height: '240px' }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie data={segmentData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {segmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div style={{ marginTop: '1rem' }}>
            {segmentData.map((s, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ width: '12px', height: '12px', background: COLORS[i], borderRadius: '3px' }}></div>
                        <span style={{ color: 'var(--text-secondary)' }}>{s.name}</span>
                    </div>
                    <span style={{ fontWeight: 'bold' }}>{s.value}%</span>
                </div>
            ))}
          </div>
        </div>
      </div>

      <div className="glass" style={{ marginTop: '1.5rem', padding: '1.5rem' }}>
          <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Map size={20} /> Revenue by Mining Center / District</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {salesData.map((sale, i) => (
                <div key={i} style={{ padding: '1rem', background: 'rgba(0,0,0,0.03)', borderRadius: '10px', border: '1px solid var(--glass-border)' }}>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{sale.name}</p>
                    <div style={{ height: '4px', background: 'rgba(0,0,0,0.1)', borderRadius: '2px', marginBottom: '0.8rem' }}>
                        <div style={{ height: '100%', width: `${(sale.value / 450000) * 100}%`, background: COLORS[i % COLORS.length], borderRadius: '2px' }}></div>
                    </div>
                    <p style={{ fontWeight: 'bold' }}>{formatPrice(sale.value)}</p>
                </div>
            ))}
          </div>
      </div>
      
      <div className="glass" style={{ marginTop: '1.5rem', padding: '1.5rem', border: '1px solid #FF8042' }}>
          <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#FF8042' }}>
            <Building size={20} /> Inspector Approvals (Pending)
          </h3>
          <div style={{ display: 'grid', gap: '1rem' }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'rgba(0,0,0,0.03)', borderRadius: '10px' }}>
                <div>
                   <h4 style={{ fontWeight: 'bold' }}>Kipushi Sunset Inn</h4>
                   <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Type: Accommodation | RCCM/KIP/2026 | Cap: 15</p>
                </div>
                <button className="btn btn-primary" style={{ background: '#2E8B57' }}>Approve Facility</button>
             </div>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'rgba(0,0,0,0.03)', borderRadius: '10px' }}>
                <div>
                   <h4 style={{ fontWeight: 'bold' }}>Kasumbalesa VIP Car Rentals</h4>
                   <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Type: Service | RCCM/KAS/2040 | Cap: N/A</p>
                </div>
                <button className="btn btn-primary" style={{ background: '#2E8B57' }}>Approve Facility</button>
             </div>
          </div>
      </div>
      
      <div style={{ marginTop: '2rem', padding: '1.5rem', borderRadius: '15px', background: 'linear-gradient(90deg, rgba(46, 139, 87, 0.1) 0%, rgba(184, 115, 51, 0.1) 100%)', border: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.2rem' }}>Village Tourism Development Fund</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Projected allocation for Rural Development: <strong style={{color: 'var(--text-primary)'}}>{formatPrice(24500)}</strong></p>
          </div>
          <button className="btn btn-secondary">View Impact Report</button>
      </div>
    </div>
  );
};

export default RevenueDashboard;
