# Admin Monorepo

This is a general-purpose management admin dashboard built with:
- **Turbo**: For high-performance build system.
- **Monorepo**: Managed with pnpm workspaces.
- **Vite**: For fast development and building.
- **React**: UI library.
- **SCSS Modules**: For styling.

## Structure

- `apps/admin`: The main admin application.
- `packages/`: Shared packages (currently empty, ready for expansion).

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start the development server:
   ```bash
   pnpm dev
   ```

3. Build for production:
   ```bash
   pnpm build
   ```

## Features

- **Beautiful Interface**: Clean, modern design with glassmorphism touches.
- **Responsive Layout**: Sidebar navigation and responsive content area.
- **Dashboard**: Example dashboard with stats and tables.
- **Routing**: Setup with `react-router-dom`.
