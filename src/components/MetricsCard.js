import React from 'react';

/**
 * MetricsCard displays a single KPI metric with a trend indicator.
 *
 * @param {string}  title      – metric label
 * @param {string}  value      – formatted metric value
 * @param {string}  trend      – e.g. "↑ 12%"
 * @param {boolean} isPositive – whether the trend is favorable
 * @param {string}  icon       – emoji or symbol shown in the card accent
 * @param {string}  period     – comparison period text
 */
const MetricsCard = ({ title, value, trend, isPositive, icon, period }) => {
  return (
    <article
      className="metrics-card"
      role="region"
      aria-label={`${title}: ${value}`}
    >
      <div className="metrics-card-header">
        <span className="metrics-card-icon" aria-hidden="true">
          {icon}
        </span>
        <span
          className={`metrics-card-trend ${isPositive ? 'trend-positive' : 'trend-negative'}`}
          aria-label={`Trend: ${trend}`}
        >
          {trend}
        </span>
      </div>
      <div className="metrics-card-body">
        <h3 className="metrics-card-value">{value}</h3>
        <p className="metrics-card-title">{title}</p>
      </div>
      <p className="metrics-card-period">{period}</p>
    </article>
  );
};

export default MetricsCard;
