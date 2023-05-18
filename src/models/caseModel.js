const connection = require('./connection');

const getAll = async () => {
    const query = 'SELECT * FROM cases';
    const result = await connection.execute(query);
    return result[0];
};

const create = async (cases) => {
    const created = new Date();
    const { latitude, longitude, status } = cases;
    const query = 'INSERT INTO cases (latitude, longitude, status, created) VALUES (?, ?, ?, ?)';
    const result = await connection.execute(query, [latitude, longitude, status, created]);
    return result;
};

const update = async (cases) => {
    const { id, latitude, longitude, status } = cases;
    const query = 'UPDATE cases SET latitude = ?, longitude = ?, status = ? WHERE id = ?';
    const result = await connection.execute(query, [latitude, longitude, status, id]);
    return result;
};

const deleteCase = async (id) => {
    const query = 'DELETE FROM cases WHERE id = ?';
    const result = await connection.execute(query, [id]);
    return result;
};


module.exports = {
    getAll,
    create,
    update,
    deleteCase,
};