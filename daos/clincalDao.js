const Clinical = require('../models/clinical');

const ClinicalDAO = {
    create: async (clinicalData) => {
        const clinical = new Clinical(clinicalData);
        return await clinical.save();
    },

    read: async (clinicalId) => {
        return await Clinical.findById(clinicalId).populate('Patient');
    },

    update: async (clinicalId, clinicalData) => {
        return await Clinical.findByIdAndUpdate(clinicalId, clinicalData, { new: true });
    },

    delete: async (clinicalId) => {
        return await Clinical.findByIdAndDelete(clinicalId);
    },

    list: async () => {
        return await Clinical.find().populate('Patient');
    }
};

module.exports = ClinicalDAO;