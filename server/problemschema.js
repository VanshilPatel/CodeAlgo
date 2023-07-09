const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const problemSchema = new Schema({
    id: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    status: { type: String, required: true },
    title: { type: String, required: true },
    acceptance: { type: String, required: true },
    difficulty: { type: String, required: true },
});

problemSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Problem', problemSchema);