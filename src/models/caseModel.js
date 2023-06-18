const connection = require('./connection');

const getAll = async () => {
    const query = 'SELECT * FROM cases';
    const result = await connection.execute(query);
    return result[0];
};

const create = async (cases) => {
    const created = new Date();
    const { latitude, longitude, status } = cases;
    const sql = 'INSERT INTO cases (latitude, longitude, status, created) VALUES (?, ?, ?, ?)';
    const result = await connection.execute(sql, [latitude, longitude, status, created]);
    return result;
};

const update = async (cases) => {
    const { id, latitude, longitude, status } = cases;
    const sql = 'UPDATE cases SET latitude = ?, longitude = ?, status = ? WHERE id = ?';
    const result = await connection.execute(sql, [latitude, longitude, status, id]);
    return result;
};

const deleteCase = async (id) => {
    const date = new Date();
    const sql = 'UPDATE cases SET deleted = ? WHERE id = ?';
    const result = await connection.execute(sql, [date, id]);
    return result;
};

const catchCaseByStatus = async(status) => {
    const sql = 'SELECT * FROM CASES WHERE status = ?';
    const result = await connection.execute(sql, [status]);
    return result[0];
};


module.exports = {
    getAll,
    create,
    update,
    deleteCase,
    catchCaseByStatus
};