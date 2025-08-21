# Nam Techie 3D Portfolio

A Three.js powered portfolio site that renders a 3D desk scene and embeds a separate operating system inside the on-screen monitor.

## Features
- 3D environment with camera controls and animations.
- Monitor content loaded via `<iframe>` from an external site.
- Express server for serving the built assets and handling contact form emails.
- Webpack build pipeline with TypeScript support.

## Tech Stack
- [Three.js](https://threejs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Webpack](https://webpack.js.org/)
- [Express](https://expressjs.com/)
- [GSAP](https://greensock.com/gsap/)

## Prerequisites
- [Node.js](https://nodejs.org/) >= 18
- npm

## Installation
```bash
# Clone the repository
git clone https://github.com/nam-techie/portfolio-website.git
cd portfolio-website

# Install dependencies
npm install
```

## Development
```bash
# Start webpack dev server
npm run dev
```
The development server reloads automatically when files change.

## Production Build
```bash
# Build optimized assets
npm run build

# Serve the production build
npm start
```
The server listens on port `8080` and serves the `public` directory.

## Environment Variables
The contact form uses Gmail SMTP and requires:
```bash
FOLIO_EMAIL=your.gmail.username
FOLIO_PASSWORD=your.gmail.password
```

## Project Structure
```
├── bundler/            # Webpack configurations
├── server/             # Express server
├── src/                # Three.js application code
├── static/             # Models, textures, audio assets
└── .github/workflows/  # CI/CD definitions
```

## CI/CD
A GitHub Actions workflow builds the project on every push and deploys to Vercel when pushing to `main`.
Provide the following secrets in the repository settings:
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

## Contributing
Issues and pull requests are welcome. Please open a discussion before major changes.

## License
UNLICENSED

## Contact
- Email: [nam.dpwrok04@gmail.com](mailto:nam.dpwrok04@gmail.com)
