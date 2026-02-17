import React from 'react';

/**
 * RecentUpdates shows a timeline of recent product releases / improvements.
 * Add new entries at the top of the `updates` array as PRs are merged.
 */
const updates = [
  {
    id: 1,
    title: 'Enhanced dashboard with real-time metrics',
    date: 'Feb 17, 2026',
    tag: 'Enhancement',
    tagColor: 'tag-blue',
  },
  {
    id: 2,
    title: 'Improved mobile responsiveness',
    date: 'Feb 15, 2026',
    tag: 'UI/UX',
    tagColor: 'tag-purple',
  },
  {
    id: 3,
    title: 'Added data export functionality',
    date: 'Feb 12, 2026',
    tag: 'Feature',
    tagColor: 'tag-green',
  },
];

const RecentUpdates = () => {
  return (
    <section
      className="recent-updates"
      aria-label="Recent updates"
    >
      <h2 className="section-title">
        <span className="section-icon" aria-hidden="true">📋</span>
        Recent Updates
      </h2>
      <div className="updates-list">
        {updates.map((update) => (
          <div className="update-item" key={update.id}>
            <div className="update-dot" aria-hidden="true" />
            <div className="update-content">
              <div className="update-header">
                <h4 className="update-title">{update.title}</h4>
                <span className={`update-tag ${update.tagColor}`}>
                  {update.tag}
                </span>
              </div>
              <time className="update-date">{update.date}</time>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentUpdates;
