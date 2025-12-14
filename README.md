# Afid's Portfolio

A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design
- Dark mode toggle
- Blog with Markdown support
- SEO optimized
- Fast and lightweight

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portofolio-afidh.git
   cd portofolio-afidh
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

### Running Tests

This project includes end-to-end tests using Playwright.

1. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

2. Run the tests:
   ```bash
   npm run test:e2e
   ```

3. View test report:
   ```bash
   npx playwright show-report
   ```

## Deployment to Vercel

1. Push your code to GitHub.

2. Go to [Vercel](https://vercel.com) and sign up/login.

3. Click "New Project" and import your GitHub repository.

4. Vercel will automatically detect Next.js and deploy it.

5. Your site will be live at `https://your-project-name.vercel.app`.

## Project Structure

- `app/` - Next.js App Router pages
- `components/` - Reusable React components
- `lib/` - Utility functions
- `posts/` - Markdown blog posts
- `public/` - Static assets

## Customization

- Update content in `app/` pages
- Add new blog posts in `posts/` directory
- Modify styles in components or use Tailwind classes
- Change metadata in `app/layout.tsx`

## License

MIT
