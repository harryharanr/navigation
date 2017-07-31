const Hospital = require('../models/hospital'); // Import Hospital Model Schema
const config = require('../config/database'); // Import database configuration

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

    return router;
}