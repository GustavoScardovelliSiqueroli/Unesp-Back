const ValidatorBody = (req, res, next) => {
    const { body } = req;

    if(body.latitude === undefined || body.longitude === undefined || body.status === undefined){
        return res.status(400).json({ message: 'Os campos latitude, longitude e status são obrigatórios!' });
    }

    if(body.latitude === '' || body.longitude === '' || body.status === ''){
        return res.status(400).json({ message: 'Os campos não podem ser vazios!' });
    }

    next();
};

const VerifyStatusValue = (req, res, next) => {
    const { status } = req.body;
    if(status === undefined){
        return res.status(400).json({message: 'O campo status é obrigatório!'});
    }
    if(status === 'positivo' || status === 'negativo' || status === 'suspeito'){
        next();
    } else {
        return res.status(400).json({
            message: 'O campo status recebe somente os valores positivo, negativo ou suspeito.'
        });
    }
};

module.exports = {
    ValidatorBody,
    VerifyStatusValue
};