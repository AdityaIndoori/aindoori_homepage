# Aindoori Homepage

This project is a React-based homepage for Aindoori, built with Vite and styled using Tailwind CSS.

## Features

- Responsive design
- Dynamic sidebar navigation
- Subdomain redirection for photos

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- Docker (optional, for containerized development and deployment)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/aindoori_homepage.git
   cd aindoori_homepage
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Development

To run the development server:

```
npm run dev
```

The site will be available at `http://localhost:5173`.

## Building for Production

To create a production build:

```
npm run build
```

The built files will be in the `dist` directory.

## Docker

This project includes Docker support for both development and production environments.

### Development with Docker

1. Build the development Docker image:
   ```
   docker-compose build dev -d
   ```

2. Run the development container:
   ```
   docker-compose up dev -d
   ```

<p align="center"><b>OR</b></p>

1. Build and Run the development Docker image:
   ```
   docker-compose up dev -d --build
   ```
The site will be available at `http://localhost:5173`.

### Production with Docker

1. Build the production Docker image:
   ```
   docker-compose build web -d
   ```

2. Run the production container:
   ```
   docker-compose up web -d
   ```

<p align="center"><b>OR</b></p>

1. Build and Run the production Docker image:
   ```
   docker-compose up web -d --build
   ```

The site will be available at `http://localhost:80`.

## Contributing

Contributions to the Aindoori Homepage are welcome. Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the Apache License 2.0. See `LICENSE` for more information.

## Contact

Your Name - Aditya Indoori

Project Link: [https://github.com/AdityaIndoori/aindoori_homepage](https://github.com/AdityaIndoori/aindoori_homepage)
