# Zak Autos

Welcome to **Zak Autos** — a car search and display application built with React, TypeScript, and Tailwind CSS.

## Overview

This project was created using **Vite** with React and TypeScript, and styled with **Tailwind CSS**. It provides a user-friendly interface to search for and display cars. The project is hosted on GitHub, making it easy to clone and run on your own device.

## Technologies Used

- **React** (via Vite)
- **TypeScript**
- **Tailwind CSS**

## Getting Started

### Prerequisites

- **Node.js** (v14 or higher) and **npm** (v6 or higher) installed on your device

### Installation

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/Safdari10/Zak-Autos.git
2. Navigate to the project folder:

     ``` 
     cd zak-autos
3. Install dependencies:

    ```
    npm install
### Running the Application

To start the development server, run:

    npm run dev


This will start the Vite development server, and you can view the application in your browser at 
http://localhost:5713/

### Running the tailwind CSS in Watch Mode
To keep Tailwind CSS updated as you style:

      npm run build-css

### Building for Production

To build the app for production, run:

    npm run build

the optimised production files will be created in the src directory.

### Features

- **Car Search**: Users can search for their dream car using the search bar.
- **Responsive Design**: Fully responsive layout with Tailwind CSS for optimal experience on mobile and desktop devices.
-**Dynamic Hero Section**: Engaging hero section with a background image and overlay.
-**Car Display**: Display images of popular car brands such as BMW, Benz, Audi.

### Project Structure

The project is structured as follows:

    zak-autos/
    │
    ├── assets/             # Contains image assets     like car images, hero image, etc.
    │
    ├── src/
    │   ├── pages/          # Contains all Main      pages(e.g., Home)
    │   ├── components/     # Contains all React     components (e.g., Hero, VehicleGallery)
    │   ├── App.tsx         # Main application component
    │   ├── index.tsx       # Entry point for React
    │   └── tailwind.config.js  # Tailwind CSS     configuration
    │
    ├── package.json        # Contains project     dependencies and scripts
    ├── tsconfig.json       # TypeScript configuration
    └── README.md           # Project documentation

### Usage

You are free to use, modify, and distribute it as you wish. Contributions are welcome, Feel free to create a pull request or open an issue if you have suggestion for imporovements.