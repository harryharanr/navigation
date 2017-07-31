const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const hospitalSchema = new Schema({
    hospitalName : {type:String , required:true , unique:true  },
    hospitalEmail : {type:String , required:true , unique:true , lowercase:true },
    hospitalWebsite : {type:String , required:true , unique:true , lowercase:true },
    hasBranch:{type:String , default:'No'},
    noOfBranches:{type:Number , default:0},
    branchDetails:[{
        branchName:{type:String , required:true , unique:true}
    }]
},{collection:'hospital'});

module.exports = mongoose.model('hospital' , hospitalSchema);