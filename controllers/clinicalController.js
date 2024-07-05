const express = require('express');
const router = express.Router();
const ClinicalDAO = require('../daos/clincalDao.js');
const Clinical = require('../models/clinical'); // Import the Clinical schema
/**
 * @swagger
 * /:
 *   post:
 *     summary: Create a new clinical record
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *          schema:
 *            $ref: '#/components/schemas/clinicalSchema'
 *     responses:
 *       200:
 *         description: The created clinical record
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/clinicalSchema'
 */
router.post('/', async (req, res) => {
    const clinical = await ClinicalDAO.create(req.body);
    res.json(clinical);
});

/**
 * @swagger
 * /{id}:
 *   get:
 *     summary: Get a clinical record by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The clinical record
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/clinicalSchema' 
 */
router.get('/:id', async (req, res) => {
    const clinical = await ClinicalDAO.read(req.params.id);
    res.json(clinical);
});

// add a get route for the clinical record by patient ID
router.get('/patient/:id', async (req, res) => {
    const clinical = await ClinicalDAO.readByPatientId(req.params.id);
    res.json(clinical);
});

/**
 * @swagger
 * /{id}:
 *   put:
 *     summary: Update a clinical record by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
  *          schema:
 *             $ref: '#/components/schemas/clinicalSchema'
 *     responses:
 *       200:
 *         description: The updated clinical record
 *         content:
 *           application/json:
  *            schema:
 *               $ref: '#/components/schemas/clinicalSchema'
 */
router.put('/:id', async (req, res) => {
    const clinical = await ClinicalDAO.update(req.params.id, req.body);
    res.json(clinical);
});

/**
 * @swagger
 * /{id}:
 *   delete:
 *     summary: Delete a clinical record by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The clinical record was deleted
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/clinicalSchema'
 */
router.delete('/:id', async (req, res) => {
    await ClinicalDAO.delete(req.params.id);
    res.json({ message: 'Clinical data deleted' });
});

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get all clinical records
 *     responses:
 *       200:
 *         description: List of clinical records
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/clinicalSchema' 
 */
router.get('/', async (req, res) => {
    const clinicals = await ClinicalDAO.list();
    res.json(clinicals);
});

module.exports = router;

module.exports = router;