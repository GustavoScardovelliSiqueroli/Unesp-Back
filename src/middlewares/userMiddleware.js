const validatorUser = (req, res, next) => {
    const { body } = req;
    if (body.user === undefined || body.password === undefined || body.email === undefined) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios!' });
    }

    if (body.user === '' || body.password === '' || body.email === '') {
        return res.status(400).json({ message: 'Os campos não podem estar vazios!' });
    }

    next();
};

const validatorLogin = (req, res, next) => {
    const { body } = req;
    if (body.user === undefined || body.password === undefined) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios!' });
    }

    if (body.user === '' || body.password === '') {
        return res.status(400).json({ message: 'Os campos não podem estar vazios!' });
    }

    next();

};

module.exports = {
    validatorUser,
    validatorLogin
};
