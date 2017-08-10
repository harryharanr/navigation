const Hospital = require('../models/hospital'); // Import Hospital Model Schema
const User = require('../models/user');
const config = require('../config/database'); // Import database configuration
const jwt = require('jsonwebtoken');

module.exports = (router) => {

    //Add Hospital
    router.post('/addHospital', (req, res) => {
        let hospital = new Hospital({
            hospitalName:req.body.hospitalName,
            hospitalEmail:req.body.hospitalEmail,
            hospitalWebsite:req.body.hospitalWebsite
        });

        hospital.save((err)=>{
            if(err){
                res.json({ success:false , message:err });
            } else {
                res.json({ success:true , message:'Hospital added' });
            }
        });
    });

    //Get Hospitals
    router.get('/getHospitals',(req,res)=>{
        Hospital.find({},(err,hospitals) => {
            if(err) {
                res.json({ success:false , message:err});
            } else {
                if(!hospitals){
                    res.json({ success:false , message:'No hospitals found!'});
                } else {
                    res.json({ success:true , message:hospitals});
                }
            }
        }).sort({ '_id': -1 });
    });

    //Get Single hospital using its ID // Note : this can be used for getting the branches of hospital also
    router.get('/getSingleHospital/:id',(req,res) => {
        if(!req.params.id){
            res.json({ success:false , message:'No hospital id was provided!!'});
        } else {
            Hospital.findOne({ _id: req.params.id } , (err,hospital) => {
                if(err){
                    res.json({ success:false , message:'Not a valid hospital id!!'});
                } else {
                    if(!hospital){
                        res.json({ success:false , message: 'No hospital found'});
                    } else {
                        res.json({ success:true , message:hospital});
                    }
                }
            });
        }
    });

    //Add Branch to respective hospital
    router.post('/addBranch',(req,res) => {
        console.log(req.body.branch.branchName);
        //Check if branch name was provided
        if(!req.body.branch.branchName){
            res.json({ success:false , message:'No branch name was provided'});
        } else {
            //Check if id was provided in request body
            if(!req.body.id){
                res.json({ success:false , message:'No id was provided'});
            } else {
                Hospital.findOne({ _id : req.body.id } , (err,hospital) => {
                    if(err){
                        res.json({ success: false, message: 'Invalid hospital id' }); 
                    } else {
                        if(!hospital){
                            res.json({ success: false, message: 'Hospital not found.' }); 
                        } else {
                            //Add new branch to the hospital
                            hospital.branchDetails.push({
                                branchName:req.body.branch.branchName
                            });
                            //Increase branch count 
                            hospital.noOfBranches++;
                            hospital.hasBranch = 'Yes';
                            //Save hospital with branch
                            hospital.save((err) => {
                                // Check if error was found
                                if (err) {
                                    res.json({ success: false, message: 'Something went wrong.' }); 
                                } else {
                                    res.json({ success: true, message: 'Branch saved' });
                                }
                            });
                        }
                    }
                });
            }
        }
    });

    router.post('/login',(req,res) => {
        if(!req.body.username){
            res.send({ success:false , message:'Username not provided'});
        } else {
            if(!req.body.password){
                res.send({ success:false , message:'Password not provided'});
            } else {
                User.findOne({ username:req.body.username } , (err,user) => {
                    if(err) {
                        res.json({ success:false , message:err});
                    } else {
                        if(!user){
                            res.json({ success:false , message:'User not found!'});
                        } else {
                            User.findOne({ password:req.body.password } , (err,user)=>{
                                if(err){
                                    res.json({ success:false , message:err});
                                } else {
                                    const token = jwt.sign({ userId : user._id} , config.secret , {expiresIn:'24h'});
                                    res.json({ success:true , message:'success' , token:token , user:{name:user.name} });
                                }
                            })
                        }
                    }
                })
            }
        }
    });

    router.post('/addHospitalAdmin',(req,res) => {
        console.log(req.body);
        let user = new User({
            name: req.body.adminName,
            username:req.body.adminUsername,
            password:req.body.adminPassword,
            hospitalName:req.body.hospitalName,
            hospitalId:req.body.id,
            userType:'hospital_admin',
        });

        user.save((err) => {
            if(err){
                res.json({ success:false , message:err });
            } else {
                res.json({ success:true , message:'Admin added'});
            }
        });
    });

    router.post('/addBranchAdmin',(req,res) => {
        let user = new User({
            name: req.body.adminName,
            username:req.body.adminUsername,
            password:req.body.adminPassword,
            branchId:req.body.branchId,
            hospitalId:req.body.hospitalId,
            userType:'branch_admin',
        });

        user.save((err) => {
            if(err){
                res.json({ success:false , message:err });
            } else {
                res.json({ success:true , message:'Branch Admin added'});
            }
        });
    });

    router.post('/addSurgeon',(req,res) => {
        let user = new User({
            name: req.body.surgeonName,
            username:req.body.surgeonUsername,
            password:req.body.surgeonPassword,
            branchId:req.body.branchId,
            hospitalId:req.body.hospitalId,
            userType:'surgeon',
        });

        user.save((err) => {
            if(err){
                res.json({ success:false , message:err });
            } else {
                res.json({ success:true , message:'Surgeon added'});
            }
        });
    });

    router.post('/addSupportStaff',(req,res) => {
        let user = new User({
            name: req.body.supportStaffName,
            username:req.body.supportStaffUsername,
            password:req.body.supportStaffPassword,
            branchId:req.body.branchId,
            hospitalId:req.body.hospitalId,
            userType:'support_staff',
        });

        user.save((err) => {
            if(err){
                res.json({ success:false , message:err });
            } else {
                res.json({ success:true , message:'Support Staff added'});
            }
        });
    });


    return router;
}