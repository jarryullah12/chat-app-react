// models/date.js
const mongoose = require('mongoose');

const DateSchema = new mongoose.Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    status: { type: String, default: 'pending' }  // Example field for status
    
    // if the current date you want to add
    // date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Date', DateSchema);
