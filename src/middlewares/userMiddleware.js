const validatorUser = (req, res, next) => {
    const { body } = req;
    if (body.email === undefined || body.cpf === undefined || body.name === undefined) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios!' });
    }

    if (body.email === '' || body.cpf === '' || body.name === '') {
        return res.status(400).json({ message: 'Os campos não podem estar vazios!' });
    }

    next();
};

const validatorLogin = (req, res, next) => {
    const { body } = req;
    if (body.email === undefined || body.password === undefined) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios!' });
    }

    if (body.email === '' || body.password === '') {
        return res.status(400).json({ message: 'Os campos não podem estar vazios!' });
    }

    next();

};

const validatorFirstLoginVerify = (req, res, next) => {
    const { body } = req;
    if (body.email === undefined || body.cpf === undefined) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios!' });
    }

    if (body.email === '' || body.cpf === '') {
        return res.status(400).json({ message: 'Os campos não podem estar vazios!' });
    }

    next();
};

const validatorFirstLogin = (req, res, next) => {
    const { body } = req;
    if (body.password === undefined) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios!' });
    }

    if (body.password === '') {
        return res.status(400).json({ message: 'Os campos não podem estar vazios!' });
    }
    next();
};

module.exports = {
    validatorUser,
    validatorLogin,
    validatorFirstLoginVerify,
    validatorFirstLogin
};
