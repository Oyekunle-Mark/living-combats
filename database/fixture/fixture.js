const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

const fixtureSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  home: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'team',
  },
  away: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'team',
  },
  venue: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['completed', 'pending'],
    default: 'pending',
  },
});

module.exports = mongoose.model('fixture', fixtureSchema);
