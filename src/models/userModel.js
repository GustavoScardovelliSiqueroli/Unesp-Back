const connection = require('./connection');
const bcrypt = require('bcrypt');
const {v4: uuidv4} = require('uuid');


const create = async(User) => {
    const created = new Date();
    const UID = uuidv4();
    const { user, password, email, role } = User;

    await bcrypt.hash(password, 10, async(err, hash) => {
        if(err) { return err; }
        const query = 'INSERT INTO user (UID, user, password, email, role, created) VALUES(?, ?, ?, ?, ?, ?)';
        const result = await connection.execute(query, [UID, user, hash, email, role, created]);
        return result;
    });
};

const login = async(User) => {
    const query = 'SELECT UID, user, password FROM user WHERE user = ?';
    const result = await connection.execute(query, [User]);
    console.log(result[0][0]);
    return result[0][0];
};

module.exports = {
    create,
    login
};