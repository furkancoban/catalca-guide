# Çatalca Guide

A modern, responsive website showcasing the historical and cultural richness of Çatalca, Istanbul.

## Features

- Interactive map
- Weather information
- News and events
- Historical sites guide
- Seasonal recommendations
- Mobile-responsive design

## Tech Stack

- Next.js 14
- React 18
- TailwindCSS
- TypeScript
- React Icons

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment on Netlify

1. Push your code to a GitHub repository

2. Connect your repository to Netlify:
   - Log in to Netlify
   - Click "New site from Git"
   - Choose your repository
   - Use the following build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
     - Environment variables: Add if needed

3. Click "Deploy site"

The site will be automatically built and deployed whenever you push changes to your repository.

## Environment Variables

Create a `.env.local` file in the root directory and add any required environment variables:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
```

## License

This project is licensed under the MIT License.
