// models/Plan.js
import mongoose from 'mongoose';

const planSchema = new mongoose.Schema({
  name: String,
  price: String,
  description: String,
  features: [String],
  highlight: Boolean,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Plan', planSchema);
