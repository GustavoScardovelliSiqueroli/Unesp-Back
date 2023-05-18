const cases = require('./caseRoutes');
const users = require('./userRoutes');

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({message: 'Funcionou'});
    });
    app.use(
        cases,
        users
    );
};

module.exports = routes;