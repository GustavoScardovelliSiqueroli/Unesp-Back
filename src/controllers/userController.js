const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../config');

const create = async(req, res) => {
    try {
        await userModel.create(req.body);
        res.json({ message: 'Usuário Criado com sucesso!' });
    } catch(err) {
        res.status(500).json({ message: 'O usuário já existe.' });
    }

};

const firstLoginVerify = async(req, res) => {
    const { email, cpf } = req.body;
    const User = await userModel.firstLoginVerify(email);

    if (!User) {
        res.status(404).json({ message: 'Usuário não encontrado.' });
    } else if (User.verificacao === 'verificado') {
        res.status(200).json({
            message: 'Usuário já verificado.',
            id: User.UID
        });
    } else {
        if (User.cpf === cpf && User.email === email) {
            res.status(200).json({
                message: 'Usuário encontrado.',
                id: User.UID
            });
        } else {
            res.status(404).json({ message: 'Usuário não encontrado.' });
        }
    }

};

const firstLogin = async(req, res) => {
    const { password } = req.body;
    const { uid } = req.params;

    const User = await userModel.firstLogin(password, uid);

    if (!User) {
        return res.status(200).json({ message: 'Senha criada com sucesso.' });
    }else{
        return res.status(404).json({ message: 'Erro ao alterar senha.' });
    }

};

const login = async(req, res) => {
    const { email, password } = req.body;
    const User = await userModel.login(email);

    if (!User) {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
    }else if (User.verificacao === 'pendente') {
        return res.status(401).json({ message: 'Usuário não verificado.' });
    }else{
        try{
            const { name, cpf, role } = User;
            bcrypt.compare(password, User.password, (err, result) => {

                if (err) {
                    return res.status(401).json({ message: 'Usuário não autenticado.', err: err.message });
                }

                if(result) {
                    const token = jwt.sign({ idUser: login.UID }, config.SECRET, { expiresIn: '1h'});
                    res.header('auth', token);
                    return res.status(200).json({
                        Name: name,
                        cpf: cpf,
                        role: role,
                        token: token
                    });
                } else {
                    return res.status(401).json({ message: 'Usuário ou senha incorretos.' });
                }
            });

        } catch (err){
            res.status(500).json({ message: 'Usuário ou senha incorretos.' });
        }
    }

};

module.exports = {
    create,
    login,
    firstLoginVerify,
    firstLogin
};