const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  location: {
    type: String,
    unique: false,
    required: true,
  },
});

module.exports = mongoose.model('team', teamSchema);
