# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Essential Commands

### Development
- `npm start` or `ng serve` - Run development server on http://localhost:4200
- `npm run build` or `ng build` - Build the application for production

### Code Generation
Use the Angular CLI patterns documented in README.md:

**Domain Module:**
```bash
export DOMAIN=domain-name
ng g m modules/${DOMAIN}
ng g s modules/${DOMAIN}/api/${DOMAIN}-api
ng g s modules/${DOMAIN}/application/${DOMAIN}-facade
ng g class modules/${DOMAIN}/domain/${DOMAIN}
ng g interface modules/${DOMAIN}/models/${DOMAIN}-dto
ng g s modules/${DOMAIN}/infrastructure/${DOMAIN}-data
```

**Feature Component (SCAM):**
```bash
export DOMAIN=domain-name
export FEATURE=feature-name
ng g m modules/${DOMAIN}/features/${FEATURE}
ng g c modules/${DOMAIN}/features/${FEATURE} --export
ng g s modules/${DOMAIN}/features/${FEATURE}/${FEATURE}-facade
```

**Page Module:**
```bash
export PAGE=page-name
ng g m pages/${PAGE}-page --route ${PAGE} --routing -m app
```

## Architecture Overview

This is an Angular 13 application implementing a **Domain-Driven Design (DDD)** and **Clean Architecture** pattern for managing crown caps (bottle caps) and beer brands.

### Key Architectural Patterns

1. **Domain-Driven Structure**: Each business domain (crown-caps, beer-brands, user) is organized in its own module with clear layers
2. **Clean Architecture Layers**:
   - `domain/` - Business entities and domain logic
   - `application/` - Use cases and facade services
   - `api/` - External API interfaces
   - `infrastructure/` - Data access services
   - `features/` - UI components (SCAM modules)
   - `models/` - DTOs and interfaces

3. **SCAM Pattern**: Each feature component is a Single Component Angular Module
4. **Facade Pattern**: Each feature uses a facade service to handle business logic
5. **Firebase Integration**: Uses Firebase Realtime Database with a custom CRUD base class

### Core Infrastructure

- **CrudFirebaseDatabase**: Abstract base class in `src/app/core/crud-firebase-database.ts` for Firebase operations
- **Authentication**: Auth guard protects admin routes
- **State Management**: NgRx for complex state (though not heavily used in current implementation)
- **Testing**: Jest with Angular Testing Library

### Module Structure

Each domain follows this pattern:
```
modules/domain-name/
├── api/                    # External API services
├── application/            # Facades and use cases
├── domain/                 # Domain entities
├── features/               # UI components (SCAM modules)
├── infrastructure/         # Data access
├── models/                 # DTOs
└── shared/                 # Domain-specific shared components
```

### Key Firebase Integration

- All data services extend `CrudFirebaseDatabase<T>`
- Automatic ID generation using nanoid
- Automatic `_createdAt` and `_updatedAt` timestamps
- Observable-based data streams using rxfire

### Path Alias

The codebase uses `@app/*` path mapping configured in Jest for cleaner imports.
