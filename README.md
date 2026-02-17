# ProductHub Dashboard

A modern, single-page React dashboard that displays real-time product analytics. Built as a demo for the **"AI for Product Managers"** presentation, showcasing an end-to-end AI-powered release-notes workflow.

## Live Demo

👉 **[https://gentlimani.github.io/agentic-demo-app](https://gentlimani.github.io/agentic-demo-app)**

## Features

- **KPI Metrics Cards** – Active Users, Tasks Completed, Response Time, Satisfaction Score with trend indicators
- **Recent Updates Timeline** – Chronological list of product improvements (grows as PRs merge)
- **Feature Showcase** – Highlighted capabilities with status badges (Live / Beta)
- **Live Clock** – Current date & time in the header
- **Fully Responsive** – Looks great on desktop, tablet, and mobile
- **GitHub Pages Ready** – Deploys automatically on push to `main`

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 (Create React App) |
| Styling | Vanilla CSS with CSS custom properties |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |

## Local Development

```bash
# Clone the repository
git clone https://github.com/gentlimani/agentic-demo-app.git
cd agentic-demo-app

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

## Deployment

### Automatic (recommended)

Every push to the `main` branch triggers the GitHub Actions workflow that builds and deploys to GitHub Pages automatically.

### Manual

```bash
npm run deploy
```

This runs `npm run build` and publishes the `build/` folder to the `gh-pages` branch.

## Project Structure

```
demo-app/
├── .github/workflows/
│   └── deploy.yml          # Auto-deploy on push to main
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js         # App header with logo and clock
│   │   ├── MetricsCard.js    # Individual KPI metric card
│   │   ├── FeatureShowcase.js # Feature highlights section
│   │   └── RecentUpdates.js  # Product updates timeline
│   ├── App.js                # Root component and layout
│   ├── App.css               # All styles (CSS custom properties)
│   └── index.js              # React entry point
├── package.json
└── README.md
```

## Future PR Ideas

Use these to demo the AI release-notes workflow:

| PR | Description |
|----|-------------|
| `feat: Add user activity chart (DEMO-123)` | Line chart showing daily active users |
| `feat: Add dark mode toggle (DEMO-124)` | Theme switcher with localStorage persistence |
| `feat: Add notifications panel (DEMO-125)` | Bell icon with a dropdown list of alerts |
| `feat: Add settings panel (DEMO-126)` | User preferences sidebar |
| `feat: Add new KPI card (DEMO-127)` | Additional metric (e.g., Revenue, NPS) |

## License

MIT
