// const express = require('express');
// const router = express.Router();
// const UserModel = require('../modules/usermodules.js');
// const cloudinary=require('cloudinary').v2;

// router.post('/signup',
    
//     async function(req,res) {
//         // Read the body of POST request
//         const document = {
//             "firstName":req.body.firstName,
//             "lastName":req.body.lastName,
//             "email":req.body.email,
//             "password":req.body.password,
//             "phone":req.body.phone,
//         }
//         /* UPLOAD FILE TO CLOUDINARY */ 
//         // check if file has been attached
//         const files = Object.values(req.files);
//         if (files.length>0) {
//             // upload the file to cloudinary
//             await cloudinary.uploader.upload(
//                 files[0].path,
//                 function(cloudinaryErr, cloudinaryResult) {
//                     // if upload is successful 
//                     if(!cloudinaryErr){
//                         //add image url to document
//                         document['avatar'] = cloudinaryResult.url;
//                     }
//                     // else
//                     else{
//                         // send client error
//                         res.json(
//                             {
//                                 message: "avatar upload error in /user/Sign-Up"
//                             }
//                         )
//                     }
//                 }
//             )
//         };


//         /* CREATE DOCUMENT IN MONGODB */
//         // create a new document in database
//         UserModel
//         .create(document)
//         // if successful
//         .then(
//             function(dbDocument) {
                
//                 res.json(
//                     {
//                         document:dbDocument,
//                         message:"User created"
//                     }
//                 ) 
//             }
//         )
//         // otherwise
//         .catch(
//             function(dbError) {
//                 console.log("DB created error",dbError)
//             }
//         )
        
//     }
// ) 


// router.get('/all',
    
//     function(req,res) {
//         usermodules
//         .find()
//         .then(
//             function(document) {
//                 res.send(document)
//             }
//         )
//         .catch(
//             function(dbError) {
//                 console.log('Error /user/all',dbError)
//             }
//         )
//     }
// )

// router.put('/update',
    
//     function(req,res) {
       
//         // the search criteria
//         const search = {_id : mongoose.Types.ObjectId(req.body._id)}

//         // the replacement of the document 
//         const updatedDocument = {
//             firstName: req.body.firstName,
//             lastName:req.body.lastName,
//             email:req.body.email,
//             password:req.body.password,
//             phone:req.body.phone,
//         }

//         // this will tell MongoDB to show the updated document a.k.a (row of data)
//         const options = {new:true}
//         usermodules
//         .findOneAndUpdate(
//             search,
//             updatedDocument,
//             options
//         )
//         .then(
//             function(updatedDocument) {
//                 res.send(updatedDocument)
//             }
//         )
//         .catch(
//             function(dbError) {
//                 console.log('error /user/update', dbError)
//             }
//         ) 
//     }
// )


// module.exports = router;