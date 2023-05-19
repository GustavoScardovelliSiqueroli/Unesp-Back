const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../config');

const create = async(req, res) => {
    try {
        await userModel.create(req.body);
        res.send({ message: 'Usuário Criado com sucesso!' });
    } catch(err) {
        res.status(500).send({ message: 'O usuário já existe.' });
    }

};

const login = async(req, res) => {
    const { user, password } = req.body;
    const User = await userModel.login(user);
    const { name, cpf, role } = User;

    try{
        bcrypt.compare(password, User.password, (err, result) => {

            if (err) {
                return res.status(401).send({ message: 'Usuário não autenticado.', err: err.message });
            }

            if(result) {
                const token = jwt.sign({ idUser: login.UID }, config.SECRET, { expiresIn: '1h'});
                res.header('auth', token);
                return res.status(200).json({
                    userName: name,
                    cpf: cpf,
                    role: role,
                    token: token
                });
            } else {
                return res.status(401).send({ message: 'Usuário ou senha incorretos.' });
            }
        });

    } catch (err){
        res.status(500).send({ message: 'Usuário ou senha incorretos.' });
    }

};

module.exports = {
    create,
    login
};