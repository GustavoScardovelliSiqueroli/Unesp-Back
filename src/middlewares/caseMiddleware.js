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

module.exports = {
    ValidatorBody,
};