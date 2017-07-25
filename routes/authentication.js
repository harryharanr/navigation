const Hospital = require('../models/hospital'); // Import Hospital Model Schema
const config = require('../config/database'); // Import database configuration

module.exports = (router) => {

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

    return router;
}