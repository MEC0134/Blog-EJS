// file for database connection
const mongoose = require('mongoose');
const mongo = require('mongodb');


mongoose.connect('mongodb://127.0.0.1:27017/blogDB');


const articleSchema = new mongoose.Schema({
    articleTitle: String, 
    articleContent: String
}); 


const Article = mongoose.model('Article', articleSchema);


module.exports = {
    Article: Article
};