const mongoose = require("mongoose");

// a model is a javascript object that contains information to interact with mongoDB
// Can be thought of as a template
// Gives javascript functions to interact with the database

// Scema is a definition of the document
const snippetSchema = new mongoose.Schema({
    title: {type: String}, // can add the attribute required: true to specify that the field is necessary
    description: {type: String},
    code: {type: String}
}, {
    timestamps: true // adds the createdAt and updatedAt fields for our object/model
});

const Snippet = mongoose.model("snippet", snippetSchema);

module.exports = Snippet;