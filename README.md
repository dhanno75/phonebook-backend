# phonebook-backend

The project builds RESTful APIs using Node.js, Express and Mongoose, ...

## Postman Documentation
https://documenter.getpostman.com/view/18850363/2s9YkjCPcy

## Manual Installation

Clone the repo:

```bash
git clone https://github.com/dhanno75/phonebook-backend.git
cd phonebook-backend
```

Install the dependencies:

```bash
npm install
```

## Table of Contents

- [Commands](#commands)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)

## Commands

Running in development:

```bash
npm start
# or
npm run dev
```

## Project Structure

server\
 |--controllers\    # Controllers
 |--models\         # Mongoose models
 |--routes\         # Routes
 |--index.js        # App entry point
```

### API Endpoints

List of available routes:

**Role routes**:\
`POST https://phonebook-backend-umber.vercel.app/contact` - Create a contact\
`GET https://phonebook-backend-umber.vercel.app/contact` - Get all contacts\
`PUT https://phonebook-backend-umber.vercel.app/contact/:id` - Update contact\
`DELETE https://phonebook-backend-umber.vercel.app/contact/:id` - Delete contact
