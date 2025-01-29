// src/server.ts
import express from "express";
import { UserService } from "./services/UserService";  // Assuming UserService exists
import { User } from "./interfaces/User";

const app = express();
const port = 3000; // You can change the port if needed

// Serve a simple endpoint to fetch user data
app.get("/user/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const user: User = await UserService.getUser(userId);  // Fetch user data from your service
    res.json(user);  // Send the user data as JSON response
  } catch (err) {
    res.status(500).json({ error: "Unable to fetch user data" });
  }
});

// Serve static files from the "public" folder (optional if you want HTML)
app.use(express.static("public"));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
