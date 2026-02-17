import React from 'react';

/**
 * FeatureShowcase highlights key product capabilities with icons and descriptions.
 */
const features = [
  {
    id: 1,
    icon: '⚡',
    title: 'Real-Time Analytics',
    description:
      'Monitor key product metrics as they happen with live-updating dashboards and instant insights.',
    status: 'Live',
    statusColor: 'status-live',
  },
  {
    id: 2,
    icon: '🔒',
    title: 'Enterprise Security',
    description:
      'SOC 2 compliant infrastructure with end-to-end encryption and role-based access controls.',
    status: 'Live',
    statusColor: 'status-live',
  },
  {
    id: 3,
    icon: '🔗',
    title: 'Seamless Integrations',
    description:
      'Connect with Jira, Slack, Confluence, and 50+ tools your team already uses every day.',
    status: 'Beta',
    statusColor: 'status-beta',
  },
];

const FeatureShowcase = () => {
  return (
    <section
      className="feature-showcase"
      aria-label="Feature showcase"
    >
      <h2 className="section-title">
        <span className="section-icon" aria-hidden="true">✨</span>
        Feature Showcase
      </h2>
      <div className="features-grid">
        {features.map((feature) => (
          <article className="feature-card" key={feature.id}>
            <div className="feature-card-top">
              <span className="feature-icon" aria-hidden="true">
                {feature.icon}
              </span>
              <span className={`feature-status ${feature.statusColor}`}>
                {feature.status}
              </span>
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeatureShowcase;
