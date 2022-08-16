const { Schema, model } = require("mongoose");

const celebSchema = new Schema({
 name: String,
 occupation: String,
 catchPhrase: String,
});


const CelebModel = model("celeb", celebSchema);

module.exports = CelebModel;