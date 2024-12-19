const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger");
const opportunityRoutes = require("./routes/opportunityRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use("/api/opportunities", opportunityRoutes);

// Base route
app.get("/", (req, res) => {
  res.send("Funding Opportunities API is running...");
});

module.exports = app;
