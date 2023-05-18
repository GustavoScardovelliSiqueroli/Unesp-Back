const caseModel = require('../models/caseModel');

const getAll = async (req, res) => {
    const cases = await caseModel.getAll();
    return res.status(200).json(cases);
};

const create = async (req, res) => {
    const cases = await caseModel.create(req.body);
    return res.status(201).json(cases);
};

const update = async (req, res) => {
    const { id } = req.params;
    const cases = await caseModel.update({ ...req.body, id });
    return res.status(200).json(cases);
};

const deleteCase = async (req, res) => {
    const { id } = req.params;
    const cases = await caseModel.deleteCase(id);
    return res.status(200).json(cases);
};

module.exports = {
    getAll,
    create,
    update,
    deleteCase,
};