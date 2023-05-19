const cases = require('./caseRoutes');
const users = require('./userRoutes');

const routes = (app) => {
    app.use(
        cases,
        users,
    );
};

module.exports = routes;