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

const verifyPassword = (req, res, next) => {

    const { newPassword } = req.body;
    const password = String(newPassword);
    const results = {};
    // Verificando se a senha tem pelo menos 8 caracteres
    if( password.length < 8) results.message1 = 'A senha deve conter no mínimo 8 caracteres.';

    if(!(/[A-Z]/.test(password))) results.message2 = 'A senha deve conter no mínimo 1 letra maiúscula.';

    if(!(/[0-9]/.test(password))) results.message3 = 'A senha deve conter no mínimo 1 número.';

    if(!(/\W|_/.test(password))) results.message4 = 'A senha deve conter no mínimo 1 caractere especial.';

    if(Object.keys(results).length !== 0) {
        return res.status(400).json(results);
    } else {
        next();
    }
};

module.exports = {
    validatorUser,
    validatorLogin,
    validatorFirstLoginVerify,
    validatorFirstLogin,
    verifyPassword
};
