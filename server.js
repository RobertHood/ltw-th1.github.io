const express = require("express");
const path = require("path");
const mysql = require("mysql2");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Replace with your MySQL username
  password: "Boybuster_03", // Replace with your MySQL password
  database: "SurveyDB"
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL connection error:", err);
    return;
  }
  console.log("✅ Connected to MySQL database.");
});

// Serve main page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Handle form submission
app.post("/submit-survey", (req, res) => {
  const { name, major, id_number, class: userClass, email, answers } = req.body;

  // Insert user data
  const userQuery = "INSERT INTO Users (name, major, id_number, class, email) VALUES (?, ?, ?, ?, ?)";
  db.query(userQuery, [name, major, id_number, userClass, email], (err, result) => {
    if (err) {
      console.error("❌ Error inserting user data:", err);
      return res.status(500).send("Error saving data.");
    }

    const userId = result.insertId;

    // Insert answers
    const answerQuery = "INSERT INTO Answers (user_id, question_no, answer) VALUES ?";
    const answerValues = answers.map((answer) => [userId, answer.question_no, answer.answer]);

    db.query(answerQuery, [answerValues], (err) => {
      if (err) {
        console.error("❌ Error inserting answers:", err);
        return res.status(500).send("Error saving answers.");
      }

      res.send("Survey submitted successfully!");
    });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});