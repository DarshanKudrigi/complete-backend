# Complete Backend Workspace

A multi-project workspace with several Node.js/Express services plus a React (Vite) client. Each service is independent and can be run on its own.

## Contents

- API: Simple in-memory notes API.
- authorize: Auth service (register) backed by MongoDB (Mongoose).
- mongodb: Notes API backed by MongoDB (Mongoose).
- project1/server: Posts API with ImageKit upload + MongoDB.
- project1/client: React + Vite frontend and TailwindCSS.

## Tech Stack

- Node.js, Express
- MongoDB + Mongoose
- React + Vite (client)
- ImageKit (project1/server uploads)

## Prerequisites

- Node.js 18+ and npm
- MongoDB (local or Atlas) for the services that use it
- ImageKit account for project1/server uploads

## Getting Started

Install dependencies in each service you want to run:

```bash
cd API
npm install

cd ..\authorize
npm install

cd ..\mongodb
npm install

cd ..\project1\server
npm install

cd ..\client
npm install
```

### Run Services

Each backend service starts from its own folder:

```bash
# API
cd API
node server.js

# authorize
cd ..\authorize
node server.js

# mongodb
cd ..\mongodb
node server.js

# project1/server
cd ..\project1\server
node server.js
```

Run the client:

```bash
cd project1\client
npm run dev
```

> Note: Most servers bind to port 3000. Run one at a time or change the port in code (or env where supported).

## Environment Variables

Create a `.env` file in the service folder when required.

### authorize

```
MONGO_URI=your_mongodb_connection_string
```

### mongodb

```
MONGO_URI=your_mongodb_connection_string
```

### project1/server

```
IMAGE_KIT_PRIVATE_KEY=your_imagekit_private_key
PORT=3000
```

> Security note: there is a hardcoded MongoDB connection string in project1/server/src/db/db.js. Replace it with an environment variable before publishing.

## API Endpoints

### API (in-memory)

- POST /notes
- GET /notes
- DELETE /notes/:id
- PATCH /notes/:id
- POST /amd
- GET /amd

### authorize

- POST /api/auth/register
  - body: `{ "username": "...", "password": "...", "email": "..." }`

### mongodb

- POST /notes
  - body: `{ "title": "...", "description": "...", "age": 0 }`

### project1/server

- POST /create-post
  - multipart form-data with fields: `image` (file), `title`, `caption`
- GET /posts

## Publishing Checklist

- Ensure `.env` files and credentials are not committed (see .gitignore).
- Rotate any leaked keys before pushing public.
- Add `.env.example` files if you want to share variable names without values.

## License

ISC (per individual package.json files).
