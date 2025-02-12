# Malaika Backoffice

A modern backoffice application for managing luxury rentals and listings including properties, yachts, planes, and cars. Built with React, Tailwind CSS, and MongoDB.

## Features

- 🏠 Property Listings Management
- 🛥️ Yacht Charter Management
- ✈️ Private Plane Charter Management
- 🚗 Luxury Car Rental Management
- 📰 News & Links Management
- 📸 Image Upload with Camera Integration
- 💰 AED Currency Support
- 🎨 Modern Black & Gold Theme

## Prerequisites

- Node.js (v16 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/malaika-backoffice.git
cd malaika-backoffice
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_APP_PORT=21113
MONGODB_URI=your_mongodb_connection_string
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:21113`

## Project Structure

```
malaika_backoffice/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Sidebar.jsx
│   │   └── shared/
│   │       ├── ListingCard.jsx
│   │       ├── ListingForm.jsx
│   │       └── NewsCard.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Properties.jsx
│   │   ├── Yachts.jsx
│   │   ├── Planes.jsx
│   │   ├── Cars.jsx
│   │   └── News.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## API Documentation

### Base URL
```
http://localhost:21113/api
```

### Authentication
All API endpoints require authentication using JWT tokens. Include the token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

### Endpoints

#### Properties

```yaml
/api/properties:
  get:
    summary: List all properties
    responses:
      200:
        description: List of properties
        content:
          application/json:
            schema:
              type: array
              items:
                $ref: '#/components/schemas/Property'
  post:
    summary: Create a new property
    requestBody:
      required: true
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/PropertyInput'
    responses:
      201:
        description: Property created successfully

/api/properties/{id}:
  get:
    summary: Get property by ID
  put:
    summary: Update property
  delete:
    summary: Delete property
```

#### Yachts

```yaml
/api/yachts:
  get:
    summary: List all yachts
  post:
    summary: Create a new yacht listing

/api/yachts/{id}:
  get:
    summary: Get yacht by ID
  put:
    summary: Update yacht
  delete:
    summary: Delete yacht
```

#### Planes

```yaml
/api/planes:
  get:
    summary: List all planes
  post:
    summary: Create a new plane listing

/api/planes/{id}:
  get:
    summary: Get plane by ID
  put:
    summary: Update plane
  delete:
    summary: Delete plane
```

#### Cars

```yaml
/api/cars:
  get:
    summary: List all cars
  post:
    summary: Create a new car listing

/api/cars/{id}:
  get:
    summary: Get car by ID
  put:
    summary: Update car
  delete:
    summary: Delete car
```

#### News & Links

```yaml
/api/news:
  get:
    summary: List all news items
  post:
    summary: Create a new news item

/api/news/{id}:
  get:
    summary: Get news item by ID
  put:
    summary: Update news item
  delete:
    summary: Delete news item
```

### Schemas

```yaml
components:
  schemas:
    Property:
      type: object
      properties:
        id:
          type: string
        type:
          type: string
        title:
          type: string
        description:
          type: string
        price:
          type: number
        images:
          type: array
          items:
            type: string
        createdAt:
          type: string
          format: date-time
        updatedAt:
          type: string
          format: date-time

    PropertyInput:
      type: object
      required:
        - type
        - title
        - description
        - price
      properties:
        type:
          type: string
        title:
          type: string
        description:
          type: string
        price:
          type: number
        images:
          type: array
          items:
            type: string
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
