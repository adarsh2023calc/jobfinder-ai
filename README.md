# JobFinder AI - WhatsApp Job Matching Platform

A modern job recommendation platform that matches users with relevant job opportunities based on their skills and preferences, and sends notifications via WhatsApp.

## Features

- 🔐 **User Authentication**: Complete authentication flow with Clerk (Email, Phone, Google, LinkedIn)
- 👤 **User Profile Management**: Detailed user profile creation with skills, experience, and job preferences
- 🔍 **Job Matching**: AI-powered job matching (backend implementation by separate team)
- 📱 **WhatsApp Notifications**: Job alerts sent via WhatsApp (integration coming soon)
- 💻 **Modern UI**: Sleek, responsive UI built with Next.js, Tailwind CSS, and shadcn/ui components

## Tech Stack

- **Frontend**: Next.js, TypeScript, Tailwind CSS, shadcn/ui
- **Authentication**: Clerk
- **Form Management**: React Hook Form, Zod
- **Database**: MongoDB (for storing user profiles)
- **State Management**: React Hooks

## Setup Instructions

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- MongoDB database
- Clerk account

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
# Clerk Authentication Keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# MongoDB
MONGODB_URI=your_mongodb_connection_string
```

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/jobfinder-ai.git
   cd jobfinder-ai
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Run the development server
   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Clerk Setup

1. Create a new application on [Clerk Dashboard](https://dashboard.clerk.dev/)
2. Configure the authentication methods (Email, Phone, Google, LinkedIn)
3. Copy your API keys to the `.env.local` file

## MongoDB Setup

1. Create a MongoDB cluster (Atlas or self-hosted)
2. Create a database and obtain your connection string
3. Add the connection string to your `.env.local` file

## Project Structure

```
jobfinder-ai/
├── public/
├── src/
│   ├── app/
│   │   ├── api/         # API routes
│   │   ├── dashboard/   # Protected dashboard routes
│   │   ├── sign-in/     # Authentication routes
│   │   ├── sign-up/
│   │   ├── globals.css  # Global styles
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Landing page
│   ├── components/      # UI components
│   ├── constants/       # Constants and data
│   ├── lib/             # Utility functions
│   └── models/          # MongoDB models
├── .env.local           # Environment variables
├── next.config.ts       # Next.js configuration
└── package.json         # Dependencies
```

## Pages and Routes

- `/` - Landing page
- `/sign-in` - Sign in page
- `/sign-up` - Sign up page
- `/dashboard` - User dashboard (protected)
- `/dashboard/profile` - User profile management
- `/dashboard/preferences` - Job preferences management
- `/api/profile` - API for user profile CRUD operations

## Contributing

This is a group project with different team members responsible for different parts:

- Frontend and Authentication: [Your Name]
- Backend Job Matching: [Team Member Names]
- WhatsApp Integration: [Team Member Names]

## License

MIT
