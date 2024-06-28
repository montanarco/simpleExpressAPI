const request = require('supertest');
const PatientDAO = require('../daos/patientDao.js');
const { app, close } = require('../server');
const { closeDB } = require('../db/database');


describe('Patient Controller', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(async() => {
    await closeDB();
    await close();
  });

  test('GET /patients', async () => {
    const mockPatients = [{ id: "1", name: 'John Doe' }, { id: "2", name: 'Jane Doe' }];
    PatientDAO.list = jest.fn().mockResolvedValue(mockPatients);

    const response = await request(app).get('/clinicalapi/patients');

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(mockPatients);
  });

  test('GET /patients/:id', async () => {
    const mockPatient = { id: "1", name: 'John Doe' };
    PatientDAO.read = jest.fn().mockResolvedValue(mockPatient);

    const response = await request(app).get('/clinicalapi/patients/1');

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(mockPatient);
  });

  test('POST /patients', async () => {
    const newPatient = { name: 'John Doe' };
    PatientDAO.create = jest.fn().mockResolvedValue({ id: "1", ...newPatient });

    const response = await request(app).post('/clinicalapi/patients').send(newPatient);

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ id: "1", ...newPatient });
  });

  test('PUT /patients/:id', async () => {
    const updatedPatient = { name: 'John Doe Updated' };
    PatientDAO.update = jest.fn().mockResolvedValue({ id: "1", ...updatedPatient });

    const response = await request(app).put('/clinicalapi/patients/1').send(updatedPatient);

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ id: "1", ...updatedPatient });
  });

  test('DELETE /patients/:id', async () => {
    PatientDAO.delete = jest.fn().mockResolvedValue(true);

    const response = await request(app).delete('/clinicalapi/patients/1');

    expect(response.statusCode).toBe(200);
  });
});