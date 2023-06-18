const jwt = require('jsonwebtoken');
const config = require('../../config');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.status(401).send({ message: 'Você não tem permissão para o acesso.'});

    jwt.verify(token, config.SECRET, (err, user) => {
        if (err) return res.status(403).send({ message: 'Acesso negado!' });
        req.user = user;
        next();
    });
};


module.exports ={
    verifyToken,
};