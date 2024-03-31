const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const buildingSchema = new Schema({
  id: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  position: {
    type: [Number], // Vector 2 [x, y]
    required: true
  },
  level: {
    type: Number,
    required: true,
    default: 1
  },
  
});

module.exports = mongoose.model('Building', buildingSchema);