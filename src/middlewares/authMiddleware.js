const jwt = require('jsonwebtoken');

const verifyToken = (req, res) => {
    const token = req.cookies.auth;
    console.log(token);
};

module.exports ={
    verifyToken,
};