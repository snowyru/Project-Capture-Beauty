// const express = require('express');
// const router = express.Router();
// const ProductModel = require('../modules/productmodules.js');


// router.post('/create',
    
//     function(req,res) {
//         // Read the body of POST request
//         const document = {
//             "Name":req.body.Name,
//             "Description":req.body.Description,
//             "Price":req.body.Price,
//             "Category":req.body.Category,
//         }
//         // create a new document in database
//         product-routes
//         .create(document)
//         // if successful
//         .then(
//             function(dbDocument) {
//                 res.json(
//                     {
//                         document: dbDocument,
//                         message: "Product Created"
//                     }
//                 )
//             }
//         )
//         // otherwise
//         .catch(
//             function(dbError) {
//                 console.log('DB product creation failed',dbError)
//                 res.json(
//                     {
//                         message: "Product Create error"
//                     }
//                 )
//             }
//         )
        
//     }
// ) 



// module.exports = router;