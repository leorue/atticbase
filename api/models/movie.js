/* Developed by Leo Schultz - 10/10/2014 */

var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var movieSchema=new Schema({
    title:'String',
    releaseYear:'String',
    director:'String',
    genre:'String'
});

module.exports=mongoose.model('Movie',movieSchema);