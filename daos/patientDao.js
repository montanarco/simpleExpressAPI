const Patient = require('../models/patient');

const PatientDAO = {
    create: async (patientData) => {
        const patient = new Patient(patientData);
        return await patient.save();
    },

    read: async (patientId) => {
        return await Patient.findById(patientId).populate('clinicals');
    },

    update: async (patientId, patientData) => {
        return await Patient.findByIdAndUpdate(patientId, patientData, { new: true });
    },

    delete: async (patientId) => {
        return await Patient.findByIdAndDelete(patientId);
    },

    list: async () => {
        return await Patient.find().populate('clinicals');
    }
};

module.exports = PatientDAO;