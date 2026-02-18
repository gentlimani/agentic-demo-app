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

const DARK_MODE_KEY = 'producthub-dark-mode';

function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    try {
      const stored = localStorage.getItem(DARK_MODE_KEY);
      if (stored !== null) return stored === 'true';
    } catch {
      /* localStorage unavailable (e.g. private browsing) — default to light */
    }
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
  });

  useEffect(() => {
    try {
      localStorage.setItem(DARK_MODE_KEY, String(isDark));
    } catch {
      /* ignore storage errors */
    }
  }, [isDark]);

  const toggle = () => setIsDark((prev) => !prev);
  return [isDark, toggle];
}

function App() {
  const [isDark, toggleDarkMode] = useDarkMode();

  return (
    <div className={`app${isDark ? ' dark' : ''}`}>
      <Header isDark={isDark} onToggleDarkMode={toggleDarkMode} />

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
