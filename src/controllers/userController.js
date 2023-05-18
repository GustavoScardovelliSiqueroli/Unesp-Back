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
    const { user, password } = req.body;
    const User = await userModel.login(user);
    console.log(password, User.password);

    bcrypt.compare(req.body.password, User.password, (err, result) => {

        if (err) {
            return res.status(401).send({ message: 'Usuário não autenticado.', err: err.message });
        }

        if(result) {
            const token = jwt.sign({ idUser: login.UID }, 'SECRET');
            res.cookie('auth', token);
            return res.status(200).send({
                message: 'Usuário autenticado com sucesso!',
                token: token
            });
        } else {
            return res.status(401).send({ message: 'Usuário não autenticado.' });
        }
    });
};

module.exports = {
    create,
    login
};