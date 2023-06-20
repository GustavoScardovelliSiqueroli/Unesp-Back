const caseModel = require('../models/caseModel');

const getAll = async (req, res) => {
    try{
        const cases = await caseModel.getAll();
        return res.status(200).json(cases);
    } catch(err) {
        return res.status(500).json({
            message: 'Falha ao comunicar com o banco.',
            error: err.message
        });
    }
};

const create = async (req, res) => {
    try{
        await caseModel.create(req.body);
        return res.status(201).json( { message: 'Caso cadastrado com sucesso!' } );
    } catch(err) {
        return res.status(500).json({
            message: 'Falha ao comunicar com o banco.',
            error: err.message
        });
    }
};

const update = async (req, res) => {
    try{
        const { id } = req.params;
        await caseModel.update({ ...req.body, id });
        return res.status(200).json( { message: 'Caso alterado com sucesso!' } );
    } catch(err) {
        return res.status(500).json({
            message: 'Falha ao comunicar com o banco.',
            error: err.message
        });
    }
};

const deleteCase = async (req, res) => {
    try{
        const { id } = req.params;
        const deletedCase = await caseModel.deleteCase(id);
        if(deletedCase[0].affectedRows === 0) {
            return res.status(400).json( { message: 'O caso informado não existe.' } );
        } else {
            return res.status(200).json( { message: 'Caso excluído com sucesso!' } );
        }

    } catch(err) {
        return res.status(500).json({
            message: 'Falha ao comunicar com o banco.',
            error: err.message
        });
    }

};
const catchCaseByStatus = async (req, res) => {
    try{
        const { status } = req.body;
        const cases = await caseModel.catchCaseByStatus(status);
        return res.status(200).json(cases);
    } catch(err) {
        return res.status(500).json({
            message: 'Falha ao comunicar com o banco.',
            error: err.message
        });
    }
};

module.exports = {
    getAll,
    create,
    update,
    deleteCase,
    catchCaseByStatus
};