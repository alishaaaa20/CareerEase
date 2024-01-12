// controllers/contactController.js
const Comment = require('../models/Comment');

// Get data route
exports.getData = async (req, res) => {
  try {
    // Assuming you have some data stored in your database
    const data = await YourDataModel.findOne(); // Replace YourDataModel with the actual model for your data
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Contact route
exports.contact = async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Perform any necessary validation here

    // Assuming you have a model for storing user messages
    const newMessage = new YourMessageModel({ name, email, subject, message });
    await newMessage.save();

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
