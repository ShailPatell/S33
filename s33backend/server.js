import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { generateToken, verifyToken } from './auth.js';
import { getChartData } from './charts.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// LOGIN (hardcoded)
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === "Shail" && password === "Shail") {
    return res.json({ token: generateToken(username) });
  }
  return res.status(401).json({ message: "Invalid login" });
});

// CHART 1
app.get('/chart1', verifyToken, async (req, res) => {
  try {
    res.json(await getChartData("chart1"));
  } catch (err) {
    res.status(500).json({ message: "DB error" });
  }
});

// CHART 2
app.get('/chart2', verifyToken, async (req, res) => {
  try {
    res.json(await getChartData("chart2"));
  } catch (err) {
    res.status(500).json({ message: "DB error" });
  }
});

app.listen(3000, () => console.log("Backend running on http://localhost:3000"));
