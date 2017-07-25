const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const hospitalSchema = new Schema({
    hospitalName : {type:String , required:true , unique:true , lowercase:true },
    hospitalEmail : {type:String , required:true , unique:true , lowercase:true },
    hospitalWebsite : {type:String , required:true , unique:true , lowercase:true }
},{collection:'hospital'});

module.exports = mongoose.model('hospital' , hospitalSchema);