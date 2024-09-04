const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const connectionString = 'mongodb+srv://hammadanwaar04:btFfjZn7XFEREFUr@cluster0.7aqbi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(connectionString)
  .then(() => console.log('MongoDB database connection established successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

const teamMemberSchema = new mongoose.Schema({
  name: String,
  role: String,
  img: String,
  description: String,
  socialLinks: {
    facebook: String,
    twitter: String,
    instagram: String,
    linkedin: String,
  }
});

const TeamMember = mongoose.model('TeamMember', teamMemberSchema);

app.get('/team', async (req, res) => {
  try {
    const members = await TeamMember.find();
    res.json(members);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const directorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  image: { type: String, required: true }
});

const Director = mongoose.model("Director", directorSchema);

app.get("/directors", async (req, res) => {
  try {
    const directors = await Director.find();
    res.json(directors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
