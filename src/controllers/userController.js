const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const create = async(req, res) => {

    const user = await userModel.create(req.body);
    res.status(201).send({
        message: `Usuário Criado com sucesso: ${user}`
    });
};

const login = async(req, res) => {
    const login = await userModel.login(req.body);
    console.log(req.body.password, login.password);
    bcrypt.compare(req.body.password, login.password, (err, result) => {
        if (err) {
            return res.status(401).send({ message: 'Usuário não autenticado.', err: err.message });
        }
        if(result) {
            const token = jwt.sign({ idUser: login.UID }, 'SECRET');
            res.status(200).send({
                message: 'Usuário autenticado com sucesso!',
                token: token
            });
        }
    });
};

module.exports = {
    create,
    login
};