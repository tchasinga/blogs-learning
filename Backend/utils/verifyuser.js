// const jwt = require('jsonwebtoken');
// // const {errorHandler} = require('./errors.js');

// const verifyUser = async (req, res, next) => {
//     const token = req.cookies.access_token;
//     if (!token) {
//         return errorHandler(res, 401, "You need to Login...!!!");
//     }
//     jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
//         if(err){
//             return errorHandler(res, 401, "You need to Login...!!!");
//         }
//         req.user = user;
//         next();
//     }) 
// }

// // Exporting the verifyUser function
// module.exports = verifyUser;
