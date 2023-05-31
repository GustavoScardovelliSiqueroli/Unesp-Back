const connection = require('./connection');
const bcrypt = require('bcrypt');
const {v4: uuidv4} = require('uuid');


const create = async (User) => {
    try {
        const created = new Date();
        const role = 'supervisor';
        const verificacao = 'pendente';
        const UID = uuidv4();
        const { name, cpf, email } = User;

        const sql = 'INSERT INTO user (UID, name, cpf, email, role, verificacao, created) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const [result] = await connection.execute(sql, [UID, name, cpf, email, role, verificacao, created]);

        return result;
    } catch (err) {
        if (err.code === 'ER_DUP_ENTRY') {
            throw new Error();
        }
        throw err;
    }
};

const firstLoginVerify = async (User) => {
    try {
        const sql = 'SELECT UID, cpf, email, verificacao FROM user WHERE email = ?';
        const result = await connection.execute(sql, [User]);

        return result[0][0];
    }
    catch(err) {
        throw new Error(err);
    }
};

const firstLogin = async (password, uid) => {
    const verificacao = 'verificado';
    const hash = await bcrypt.hash(password, 10);

    const sql = 'UPDATE user SET password = ?, verificacao = ? WHERE UID = ?';
    const result = await connection.execute(sql, [hash, verificacao, uid]);

    return result[0][0];
};

const getPassword = async(uid) => {
    try{
        const sql = 'SELECT password FROM user WHERE uid = ?';
        const result = await connection.execute(sql, [uid]);
        return result[0][0];
    } catch(err) {
        throw new Error();
    }
};

const changePassword = async(password, uid) => {
    try{
        const sql = 'UPDATE user SET password = ? WHERE uid = ?';
        const hash = await bcrypt.hash(password, 10);
        const result = await connection.execute(sql, [hash, uid]);
        console.log(result[0]);
    } catch(err) {
        throw new Error();
    }
};

const login = async(User) => {
    try{
        const sql = 'SELECT UID, password, name, cpf, email, role, verificacao FROM user WHERE email = ?';
        const result = await connection.execute(sql, [User]);

        return result[0][0];
    } catch(err) {
        throw new Error();
    }
};

module.exports = {
    create,
    login,
    firstLogin,
    firstLoginVerify,
    getPassword,
    changePassword
};