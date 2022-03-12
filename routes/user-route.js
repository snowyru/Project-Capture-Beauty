const express = require('express');
const mongoose = require('mongoose')
const router = express.Router();
const UserModel = require('../modules/UserModel.js'); //please confirm input to your dir
const cloudinary = require('cloudinary').v2;

//I'm not too confident in the backend so please confirm this works with the server.js thank you :)

router.post('/register',               
    function(req, res) {
        
        // Read the body of POST request
        const document = {
            "firstName": req.body.firstName,
            "surName": req.body.surName,
            "country": req.body.country,
            "region": req.body.region,
            "bio": req.body.bio,
            "email": req.body.email,
            "password": req.body.password,
        }

            //Avatar code Begin------------------------------------------------------------------------------------------------------

        //Check if file has been attached
        const files = Object.values(req.files);
        if(files.length > 0) {

        //upload the file to cloudinary
        cloudinary.uploader.upload(
            files[0].path,
            function(cloudinaryErr, cloudinaryResult) {
             //if upload is succesful
                if(!cloudinaryErr) {
                //Add image to url to 'document' 
                document['avatar'] = cloudinaryResult.url;    
                }
                else{
                    //client error
                    res.json(
                        {
                            message: "Avatar upload error in /user/register"
                        }
                    )
                }

            }
        )
            

        }

        // Create a new document in database
        UserModel
        .create(document)
        // If successful
        .then(
            function(dbDocument) {
                res.json(
                    {
                        document: dbDocument,
                        message: "User created"
                    }
                );
            }
        )
        // Otherwise
        .catch(
            function(dbError) {
                console.log('DB user create error', dbError)
            }
        );        
    }
);

    //Fetching all the users code -----------------------------------------------------------------------------------------------

router.get('/all',                          
    function(req, res) {

        UserModel
        .find()
        .then(
            function(document) {
                res.send(document)
            }
        )
        .catch(
            function(dbError) {
                console.log('Error /user/all', dbError)
            }
        );

    }
);

    //Updating the user profile code -----------------------------------------------------------------------------------------------

router.put('/update',
    function(req, res) {

        // The search criteria
        const search = {_id: mongoose.Types.ObjectId(req.body._id)}

        // The replacement of the document
        const updatedDocument = {
            "firstName": req.body.firstName,
            "surName": req.body.surName,
            "country": req.body.country,
            "region": req.body.region,
            "bio": req.body.bio,
            "email": req.body.email,
            "password": req.body.password,
        }

        // This will tell MongoDB to show the updated document
        const options = {new: true}

        UserModel
        .findOneAndUpdate(
            search,
            updatedDocument,
            options
        )
        .then(
            function(updatedDocument) {
                res.send(updatedDocument);
            }
        )
        .catch(
            function(error) {
                console.log('Error /user/update', error);
            }
        )
    }
);


module.exports = router;