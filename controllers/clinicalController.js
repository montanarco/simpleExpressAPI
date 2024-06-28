const express = require('express');
const router = express.Router();
const ClinicalDAO = require('../daos/clincalDao.js');

router.post('/', async (req, res) => {
    const clinical = await ClinicalDAO.create(req.body);
    res.json(clinical);
});

router.get('/:id', async (req, res) => {
    const clinical = await ClinicalDAO.read(req.params.id);
    res.json(clinical);
});

router.put('/:id', async (req, res) => {
    const clinical = await ClinicalDAO.update(req.params.id, req.body);
    res.json(clinical);
});

router.delete('/:id', async (req, res) => {
    await ClinicalDAO.delete(req.params.id);
    res.json({ message: 'Clinical data deleted' });
});

router.get('/', async (req, res) => {
    const clinicals = await ClinicalDAO.list();
    res.json(clinicals);
});

module.exports = router;