const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const connectDB = require("./config/database");
require("dotenv").config();

// Import routes
const indexRoutes = require("./routes/index");
const promptRoutes = require("./routes/prompts");

// Connect to database
connectDB();

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Logging middleware (development)
if (process.env.NODE_ENV === "development") {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
  });
}

// Routes
app.use("/", indexRoutes);
app.use("/prompts", promptRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).render("error", {
    title: "Page Not Found",
    message: "404 - Page Not Found",
    error: { message: "The page you're looking for doesn't exist" }
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(err.status || 500).render("error", {
    title: "Error",
    message: err.message || "Something went wrong",
    error: process.env.NODE_ENV === "development" ? err : {}
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📝 Environment: ${process.env.NODE_ENV || "development"}`);
});

module.exports = app;
