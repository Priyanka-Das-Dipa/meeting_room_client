# Meeting Room Booking System

A full-featured meeting room booking platform built using the MERN stack, TypeScript, and Antd Design. This system allows users to book meeting rooms, manage bookings, and handle payments seamlessly. Admins can efficiently manage rooms, users, and booking slots through an intuitive interface. The platform features a modern and responsive design using Antd Design, Tailwind CSS, React, and Redux.

## Tech Stack

**Frontend:**
- React
- Redux Toolkit & RTK Query
- Antd Design
- Tailwind CSS
- TypeScript

**Backend:**
- Express.js
- Mongoose
- JWT Authentication
- Stripe API

**Database:** MongoDB  
**Payment Integration:** Stripe  
**State Management:** Redux Toolkit with RTK Query 


## Key Features

### User Authentication with JWT
- Secure login and registration using JWT (JSON Web Token).
- Protected routes and user sessions for secure and seamless navigation.

### User Dashboard
- Manage bookings, view upcoming reservations, and modify or cancel bookings.

### Admin Dashboard
- Manage users, rooms, and time slots.
- Perform CRUD operations for meeting rooms and booking slots.
- Get an overview of bookings, user activity, and real-time room availability.

### Room Booking with Time Slots
- Book rooms based on available time slots (one-hour increments).
- Supports multiple slot bookings for consecutive hours.

### Payment Integration with Stripe
- Secure Stripe payment integration for booking confirmation.
- Payment validation ensures rooms are booked only after successful payment.

### Confetti Animation for Successful Booking
- Delightful confetti animation displayed after successful payment and booking confirmation.

### Search, Filter, and Sort Rooms
- Search rooms by name or amenities.
- Apply filters based on time slots, room capacity, and other criteria.

### Responsive UI
- Professional and modern interface built with Antd Design.
- Fully responsive design using Tailwind CSS for optimal performance on all devices.

### Booking Confirmation and Success Modal
- Displays a success modal with a congratulatory message and animation post-payment.

### Redux and RTK Query for State Management
- Efficient state management with Redux Toolkit and RTK Query for handling global state and API calls.

### TypeScript for Type Safety
- TypeScript ensures better code quality with type safety, reducing errors during development.

### Backend with Express and Mongoose
- Express.js and Mongoose power the backend, managing MongoDB collections and API endpoints.
- APIs support room management, user authentication, and payment integration.




## How to Run


1. Clone the repository:  
   ```bash
   git clone https://github.com/Priyanka-Das-Dipa/meeting_room_client
   
2. Setup your environment variables. You are ready to run!!