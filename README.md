# Hotel Reservation System

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Deployment](#deployment)
- [Team Members](#team-members)
- [License](#license)

## Description

Welcome to the Hotel Reservation System project! This is the final project for our university course, focusing on building a comprehensive hotel reservation website. The project is developed using RedwoodJS for the frontend and Java Spring for the backend.

## Features

- **User Registration and Authentication**: Users can create accounts, log in, and manage their reservations securely.
- **Hotel Search and Browsing**: Users can search for hotels based on location, dates, amenities, and more. They can browse through a wide range of hotel options.
- **Detailed Hotel Information**: Each hotel listing provides detailed information such as descriptions, amenities, images, and pricing.
- **Booking and Reservation Management**: Users can select their desired hotel, choose dates, and make reservations. They can also manage their existing reservations.
- **Real-time Availability and Pricing**: Integration with external APIs allows users to see real-time availability and pricing information for hotels.
- **Admin Dashboard**: An admin dashboard provides administrators with the ability to manage hotels, reservations, and user accounts.

## Technologies Used

The project utilizes the following technologies:

- **Frontend**: RedwoodJS, React, Material-UI, HTML, CSS
- **Backend**: Java Spring, Spring Boot, Spring Security
- **Database**: PostgreSQL

## Getting Started

To run the Hotel Reservation System locally, follow these steps:

### Frontend

1. Navigate to the frontend directory: `cd frontend`
2. Install dependencies: `yarn install`
3. Start the frontend development server: `yarn redwood dev`
4. Access the frontend at `http://localhost:8910`

### Backend

1. Navigate to the backend directory: `cd backend`
2. Set up your database configurations in `application.properties`
3. Build and run the backend application

## Deployment

To deploy the Hotel Reservation System in a production environment, follow these steps:

1. Set up a production-ready database server and configure the backend accordingly.
2. Build the frontend for production: `yarn redwood build`
3. Deploy the backend using a suitable hosting service or platform.
4. Serve the frontend using a static file server or deploy it to a CDN.

Make sure to set appropriate environment variables and configure security measures based on your deployment environment.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to explore, modify, and use the code in your own projects.
