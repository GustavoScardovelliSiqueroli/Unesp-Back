const connection = require('./connection');
const bcrypt = require('bcrypt');
const {v4: uuidv4} = require('uuid');


const create = async (User) => {
    try {
        const created = new Date();
        const role = 'supervisor';
        const UID = uuidv4();
        const { user, password, cpf,email } = User;

        const hash = await bcrypt.hash(password, 10);
        const sql = 'INSERT INTO user (UID, user, password, name,cpf,email, role, created) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const [result] = await connection.execute(sql, [UID, user, hash, name, cpf, email, role, created]);

        return result;
    } catch (err) {
        if (err.code === 'ER_DUP_ENTRY') {
            throw new Error();
        }
        throw err;
    }
};

const login = async(User) => {
    try{
        const sql = 'SELECT UID, user, password, name, cpf, role FROM user WHERE user = ?';
        const result = await connection.execute(sql, [User]);

        return result[0][0];
    } catch(err) {
        throw new Error();
    }
};

module.exports = {
    create,
    login
};