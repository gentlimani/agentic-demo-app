import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import MetricsCard from './components/MetricsCard';
import RecentUpdates from './components/RecentUpdates';
import FeatureShowcase from './components/FeatureShowcase';

/* Hardcoded sample metrics for the demo dashboard */
const metrics = [
  {
    id: 1,
    title: 'Active Users',
    value: '1,234',
    trend: '↑ 12%',
    isPositive: true,
    icon: '👥',
    period: 'vs last week',
  },
  {
    id: 2,
    title: 'Tasks Completed',
    value: '567',
    trend: '↑ 8%',
    isPositive: true,
    icon: '✅',
    period: 'vs last week',
  },
  {
    id: 3,
    title: 'Avg Response Time',
    value: '234 ms',
    trend: '↓ 15%',
    isPositive: true,   // lower is better
    icon: '⚡',
    period: 'vs last week',
  },
  {
    id: 4,
    title: 'Satisfaction Score',
    value: '4.8 / 5.0',
    trend: '↑ 0.2',
    isPositive: true,
    icon: '⭐',
    period: 'vs last week',
  },
];

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <div className="app">
      <Header isDark={isDark} onToggleTheme={toggleTheme} />

      <main className="main-content">
        {/* KPI Metrics */}
        <section className="metrics-section" aria-label="Key metrics">
          <div className="metrics-grid">
            {metrics.map((m) => (
              <MetricsCard key={m.id} {...m} />
            ))}
          </div>
        </section>

        {/* Two-column layout: updates + features */}
        <div className="content-grid">
          <RecentUpdates />
          <FeatureShowcase />
        </div>
      </main>

      <footer className="footer" role="contentinfo">
        <p>
          © 2026 ProductHub · Built for{' '}
          <strong>AI for Product Managers</strong> Demo
        </p>
      </footer>
    </div>
  );
}

export default App;
