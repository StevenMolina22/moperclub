# Moperclub Documentation

## Overview

Moperclub is a modern web application designed to showcase the best entertainment and tourism experiences in Argentina. The platform combines an e-commerce store selling sports products, clothing, and Argentine merchandise with a content-rich blog featuring travel guides and local insights. Moperclub's mission is to connect visitors and locals with exceptional experiences while offering high-quality products through its Moper sports brand.

## Technology Stack

### Frontend Architecture
- **Next.js 14**: Leveraging the latest version of this React framework for server-side rendering, static site generation, and optimized performance
- **TypeScript**: Ensuring type safety and improved developer experience across the codebase
- **Tailwind CSS**: Implementing a utility-first CSS framework for rapid, responsive UI development with consistent design patterns
- **Framer Motion**: Powering smooth animations and transitions throughout the application

### UI Component Libraries
- **NextUI**: Providing beautiful, accessible UI components with a modern design language
- **Radix UI**: Implementing unstyled, accessible components for complex UI patterns
- **Shadcn/UI**: Offering high-quality, customizable components built on Radix primitives
- **Embla Carousel**: Delivering responsive, touch-friendly carousels for product and content displays

### State Management & Data Fetching
- **Zustand**: Implementing lightweight state management with a simple, hook-based API
- **Axios**: Handling HTTP requests with an elegant, promise-based client
- **Supabase**: Powering the backend with PostgreSQL database and authentication services

### Authentication & User Management
- **Clerk**: Providing secure, feature-rich authentication and user management

## Application Architecture

### Modular Component Structure
The application follows a well-organized component architecture:

```
src/
├── app/                  # Next.js App Router structure
│   ├── (routes)/         # Main application routes
│   │   ├── about/        # About page
│   │   ├── blog/         # Blog section
│   │   ├── contact/      # Contact page
│   │   ├── home/         # Homepage components
│   │   └── store/        # E-commerce store
│   ├── api/              # API endpoints
│   └── auth/             # Authentication routes
├── components/           # Reusable UI components
│   ├── about/            # About page components
│   ├── common/           # Shared components
│   ├── compound/         # Complex component compositions
│   ├── layout/           # Layout components (navbar, footer)
│   ├── sections/         # Page sections
│   ├── team/             # Team member components
│   └── ui/               # Basic UI components
├── db/                   # Database connection and utilities
├── hooks/                # Custom React hooks
├── lib/                  # Utility libraries
├── types/                # TypeScript type definitions
└── utils/                # Utility functions
```

### Key Features

#### 1. E-commerce Platform
- **Product Catalog**: Dynamic product listings fetched from Supabase
- **Shopping Cart**: Intuitive cart management with Zustand state management
- **Order Processing**: Streamlined checkout flow with order tracking

#### 2. Content Management
- **Blog System**: Engaging travel and entertainment content
- **Events Showcase**: Featured events and activities in Argentina
- **Places Directory**: Curated guides to top destinations

#### 3. User Experience
- **Responsive Design**: Fully responsive layout optimized for all devices
- **Modern UI**: Clean, intuitive interface with consistent design language
- **Performance Optimized**: Fast loading times with Next.js optimizations

## Design Decisions

### 1. Custom Frontend Implementation
Moperclub utilizes a custom-built frontend rather than a traditional e-commerce platform to enable:
- Complete control over the user experience
- Tailored content presentation for both e-commerce and travel content
- Optimized performance for the specific needs of the application

### 2. Headless Architecture
The application employs a headless architecture with:
- Decoupled frontend and backend services
- Supabase for database and authentication
- Custom API endpoints for specific functionality

### 3. Component-Driven Development
The development approach prioritizes:
- Reusable, modular components
- Consistent design patterns
- Maintainable and scalable codebase

## Technical Highlights

### 1. Server Components
Leveraging Next.js 14's server components for:
- Improved initial page load performance
- Reduced client-side JavaScript
- Enhanced SEO capabilities

### 2. API Integration
The application integrates with:
- Supabase for database operations
- Custom API endpoints for specialized functionality
- External services for enhanced features

### 3. Authentication Flow
Secure user authentication implemented with:
- Clerk for robust identity management
- Protected routes for authenticated users
- Role-based access control

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Future Development Roadmap

1. **Enhanced Personalization**: Implementing AI-driven recommendations for products and travel experiences
2. **Advanced Search Capabilities**: Adding filters and faceted search for improved product discovery
3. **Mobile Application**: Developing native mobile apps for iOS and Android
4. **Expanded Content**: Growing the blog and travel guide sections with rich multimedia content
5. **Community Features**: Adding user reviews, ratings, and social sharing capabilities
