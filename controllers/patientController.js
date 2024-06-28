const express = require('express');
const router = express.Router();
const PatientDAO = require('../daos/patientDao.js');

router.post('/', async (req, res) => {
    const patient = await PatientDAO.create(req.body);
    res.json(patient);
});

router.get('/:id', async (req, res) => {
    const patient = await PatientDAO.read(req.params.id);
    res.json(patient);
});

router.put('/:id', async (req, res) => {
    const patient = await PatientDAO.update(req.params.id, req.body);
    res.json(patient);
});

router.delete('/:id', async (req, res) => {
    await PatientDAO.delete(req.params.id);
    res.json({ message: 'Patient deleted' });
});

router.get('/', async (req, res) => {
    const patients = await PatientDAO.list();
    res.json(patients);
});

module.exports = router;