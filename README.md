# next-template

[![CodeQL Advanced](https://github.com/boddhi9/next-template/actions/workflows/codeql.yml/badge.svg)](https://github.com/boddhi9/next-template/actions/workflows/codeql.yml)

A modern and minimal Next.js 15 starter template, built to accelerate your development with an opinionated setup of tools and components.

## Features

- **Next.js 15**: The latest Next.js version with App Router.
- **Tailwind CSS**: Utility-first styling framework for rapid UI development.
- **shadcn/ui Components**: Prebuilt accessible UI components.
- **Storybook**: Component development and testing made easy.
- **TypeScript**: Strongly typed JavaScript for maintainable code.
- **ESLint & Prettier**: Code quality and formatting out of the box.
- **Dark Mode**: Seamless theme switching with `next-themes`.
- **Framer Motion**: Add animations with ease.
- **Toast Notifications**: Prebuilt toast component for user feedback.
- **Absolute Imports**: Use `@` as the root for imports.

## Getting Started

### Quick Start

```bash
npx next-boil my-next-app
cd my-next-app
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the template in action.

## Project Structure

```
next-template/
├── app/                # Next.js App Router files
├── components/         # Reusable components
│   ├── ui/             # shadcn/ui components
├── hooks/              # Custom React hooks
├── lib/                # Utilities and configurations
├── pages/              # Legacy Pages Router (not included, not recommended)
├── public/             # Static assets
├── stories/            # Storybook files for UI components
├── styles/             # Global and component-specific styles
├── types/              # TypeScript type definitions
├── utils/              # Utility functions and helpers
├── .eslintrc.json      # ESLint configuration
├── prettier.config.js  # Prettier configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration

```

## Scripts

### Development

Start the development server with live reload:

```bash
npm run dev
```

### Build for Production

Generate a production-ready build:

```bash
npm run build
```

### Start Production Server

Serve the production build:

```bash
npm run start
```

### Lint Code

Check for linting issues:

```bash
npm run lint
```

Fix linting issues automatically:

```bash
npm run lint:fix
```

### Format Code

Automatically format code with Prettier:

```bash
npm run format
```

Check for formatting issues:

```bash
npm run format:check
```

### TypeScript

Check for type errors without emitting files:

```bash
npm run check-types
```

### Run Storybook

Start the Storybook development server:

```bash
npm run storybook
```

Build a static Storybook site:

```bash
npm run build-storybook
```

Serve the built Storybook files:

```bash
npm run storybook:serve
```

### Testing

Run tests in watch mode:

```bash
npm run test
```

Run tests in CI mode:

```bash
npm run test:ci
```

Run Storybook tests in CI mode:

```bash
npm run test-storybook:ci
```

## Documentation

Explore the frameworks and tools included in the template:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/docs)
- [Storybook Documentation](https://storybook.js.org/docs/react)

## License

This project is licensed under the [MIT License](LICENSE).