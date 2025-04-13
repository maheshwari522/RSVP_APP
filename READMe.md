# RSVP Manager

This project implements a simple RSVP Manager for an event. It provides a REST API built with Express and TypeScript for managing RSVP entries, and includes a styled HTML frontend form inspired by the Gametime Hero design language.

The backend supports operations to add/update a player's RSVP, retrieve confirmed attendees, and count RSVP statuses. The logic is encapsulated in a modular `RsvpService` class, and unit tests are provided.

---

## Features

- Add or update RSVP entries
- Retrieve confirmed attendees
- Get counts of total, confirmed, and declined responses
- Clean TypeScript structure with interfaces and service layer
- Unit tests for business logic
- HTML + JavaScript frontend using fetch API

---

How to Run the Project

1. Install Dependencies

Navigate to the project root and run:

npm install

2. Start the Server

npm run dev

This will start the Express server on http://localhost:3000.

3. How to Use the Frontend


Open the frontend/index.html file directly in your browser.

From there, you can:

Submit a new RSVP using the form

Click "Get RSVP Counts" to fetch stats

Click "View Confirmed Attendees" to see who has responded "Yes"

The frontend uses the fetch API to communicate with the backend running on localhost:3000.


4. Available API Endpoints
POST /rsvp
Submit or update an RSVP.

Request body:

json
Copy
Edit
{
  "id": "1",
  "name": "Alice",
  "status": "Yes"
}
GET /confirmed
Returns a list of players who RSVP'd "Yes".

GET /counts
Returns an object with the number of total, confirmed, and declined responses.

5 . Running Unit Tests
The RsvpService class is covered with unit tests using Jest.

To run tests:

bash
Copy
Edit
npm test
Test file:
src/services/RsvpService.test.ts


6. Future Enhancements


Integrate a database (e.g., SQLite, PostgreSQL, or MongoDB) to persist RSVP entries.

Automatically generate player IDs instead of requiring them in the request.

Add pagination and filtering for confirmed attendees.


7. Notes

The server uses an in-memory store (no database).

No build step is needed for the frontend.

The project is structured for clarity, testability, and modularity.
