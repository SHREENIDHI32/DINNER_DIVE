// foodRoute.js
import express from 'express';
import multer from 'multer';
import Food from '../models/Food.js'; // Your MongoDB model

const router = express.Router();

// Configure multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

router.post('/add', upload.single('image'), async (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    const image = req.file ? req.file.path : null; // Handle image file if it exists

    // Create a new food item and save it to the database
    const food = new Food({
      name,
      description,
      price,
      category,
      image
    });
    await food.save();
    res.json({ success: true });
  } catch (error) {
    console.error("Error adding food:", error);
    res.status(500).json({ success: false, message: "Failed to add product." });
  }
});

export default router;
