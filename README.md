# Amenitiz Test Tech - Cash Register

A flexible cash register application built with Ruby on Rails (backend) and React + TypeScript (frontend).

## Features

-   Product catalog with pricing rules
-   Shopping cart with real-time total calculation
-   Special pricing rules:
    -   Green Tea: Buy-one-get-one-free
    -   Strawberries: €4.50 each when buying 3 or more
    -   Coffee: 2/3 original price when buying 3 or more

## Tech Stack

-   **Backend**: Ruby on Rails 7
-   **Frontend**: React 19 + TypeScript + Vite
-   **Testing**: RSpec (backend), Vitest (frontend)
-   **Styling**: Tailwind CSS + Shadcn UI (Neobrutalism)

## Architecture

This application follows a **monorepo architecture** with a **clear separation between frontend and backend**:

### Backend (Ruby on Rails 7 API)

-   **REST API Architecture**: Pure API without views, configured with `config.api_only = true`
-   **MVC Pattern**: Minimal controllers (`CatalogController`, `CartController`) exposing JSON endpoints
-   **Rich Domain Model**:
    -   `ProductsCatalog`: Product catalog with static data
    -   `Cart`: Business logic for cart with total calculations
    -   **Strategy Pattern**: Modular pricing rules system (`PricingRules::BasePricingRule` and its specializations)
-   **Deployment**: Containerized with Docker

### Frontend (React 19 + TypeScript)

-   **Component-Based Architecture**: Functional React components with hooks
-   **State Management**:
    -   React Context (`CartContext`) for global cart state
    -   React Query (@tanstack/react-query) for API cache and query management
    -   localStorage for cart persistence
-   **Custom Hooks**: `useCart` and `useCatalog` to encapsulate business logic
-   **Services**: Abstraction layer for API calls (`CartService`, `CatalogService`)
-   **UI/UX**: Reusable UI components with Radix UI, Tailwind CSS for styling, and smooth animations

### Inter-Service Communication

-   **REST API**: HTTP communication between frontend (port 5173) and backend (port 3000)
-   **Main Endpoints**:
    -   `GET /catalog`: Fetch product catalog
    -   `POST /cart/total`: Calculate cart totals and promotions
-   **Error Handling**: Error propagation with try/catch and loading state management

### Architectural Patterns

-   **Separation of Concerns**: Business logic in backend, presentation logic in frontend
-   **Strategy Pattern**: For pricing rules (Green Tea, Strawberries, Coffee)
-   **Repository Pattern**: Frontend services as data abstraction layer
-   **Provider Pattern**: React Context for dependency injection

## Running Tests

### Backend (RSpec)

```bash
# In the backend/ directory
bundle exec rspec                    # Run all tests
bundle exec rspec spec/models/       # Model tests only
bundle exec rspec spec/requests/     # Controller/API tests only
bundle exec rspec --format doc       # Detailed output
bundle exec guard                   # Run tests in watch mode (with guard)
```

### Frontend (Vitest)

```bash
# In the frontend/ directory
npm test                    # Run all tests in watch mode
npm run test:all           # Run all tests once
npm run test:ui            # Graphical interface for tests
```

### Test Configuration

-   **Backend**: RSpec with Guard for tests in watch mode
-   **Frontend**: Vitest with Testing Library, jsdom environment, automatic service mocking
-   **Coverage**: Unit and integration tests for critical components (Cart, Catalog, pricing rules)

### Running the Complete Application

```bash
# Backend
cd backend && bundle install && rails server

# Frontend (separate terminal)
cd frontend && npm install && npm run dev
```

The application will be accessible at `http://localhost:5173` with the backend API at `http://localhost:3000`.
