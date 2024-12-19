# Phlo API

### Project Overview
This API allows users to retrieve and search for funding opportunities. It also provides Swagger documentation for easy API exploration.

### Setup Instructions

1. **Install Dependencies**
   ```bash
   cd phlo-api
   npm install
   ```

2. **Set Up Environment Variables**
   Create a `.env` file in the root of your project with the following content:
   ```plaintext
   PORT=5000
   ```

4. **Run the Server**
   - **Development Mode:**
     ```bash
     npm run dev
     ```
   - **Production Mode:**
     ```bash
     npm start
     ```

### Endpoints

| Method | Endpoint                     | Description                         |
|--------|------------------------------|-------------------------------------|
| GET    | `/api/opportunities`         | Get all opportunities               |
| GET    | `/api/opportunities?query=keyword` | Search opportunities by keyword     |
| GET    | `/api-docs`                  | Swagger API documentation           |

### Swagger Documentation
To view the interactive API documentation, run the server and open [http://localhost:5000/api-docs](http://localhost:5000/api-docs) in your browser.

### Scripts

- **Start**: `npm start`
- **Dev**: `npm run dev`
