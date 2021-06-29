const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true 
    }, 
    subtitle: {
        type: String,
    },
    authors: {
        type: String, 
        required: true
    },
    link: {
        type: String,
        required: false
    },
   description: {
       type: String, 
       required: true
   },
   image: {
       type: String, 
       required: false
   },
   googleId: {
       type: String, 
       required: true, 
       unique: true
   }

});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;