const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 8000;

//new
const cors = require('cors');
app.use(cors()); // Use this before your routes are set up
//end

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/testweather', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// MongoDB schema and model
const WeatherSchema = new mongoose.Schema({
  district: String,
  temperature: Number,
  air_pressure: Number,
  humidity: Number,
});

const Weather = mongoose.model('Weather', WeatherSchema);

// Define API endpoints
app.get('/api/weather/:district', async (req, res) => {
  const { district } = req.params;
  try {
    const data = await Weather.findOne({ district });
    if (!data) {
      return res.status(404).json({ message: 'Data not found' });
    }
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
