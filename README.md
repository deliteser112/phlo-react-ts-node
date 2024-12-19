
# Phlo beta

## Overview

This is a full-stack application for searching, filtering, and sorting opportunities. The frontend is built with React, TypeScript, and Tailwind CSS, while the backend uses Node.js and Express. Here is the project [overview](https://www.loom.com/share/c21a263ff2474366b6d2e569a4afaf72?sid=8edf1ec4-7bc3-4c57-acbe-cd9964c85fae)

## Setup Instructions

### Install Dependencies

Navigate to the project root and run:

```bash
npm install
```

### Set Environment Variables

Create a `.env` file in the project root with the following content:

```env
# Backend
PORT=5000

# Frontend
VITE_API_BASE_URL=http://localhost:5000/api
```

### Run the Application

Start both the frontend and backend:

```bash
npm run dev
```

This will:

- Start the backend server on [http://localhost:5000](http://localhost:5000).
- Start the frontend development server at [http://localhost:5173](http://localhost:5173).

## Features

- **Search**: Find opportunities by keywords in titles and descriptions.
- **Filters**: Filter opportunities by cheque size and location.
- **Sort**: Sort opportunities by matching score.
- **Responsive Design**: The frontend is fully responsive.

## Build for Production

To create a production build for the frontend:

```bash
npm run build
```

To serve the production frontend and backend:

```bash
npm start
```