const mongoose = require('mongoose');
const Patient = require('./patient');

const clinicalSchema = new mongoose.Schema({
    componentName: {
        type: String,
        required: true
    },
    componentValue: {
        type: String,
        required: true
    },
    measuredDateTime: {
        type: Date,
        default: Date.now,
        required: true
    },
    Patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Patient
    },
});

clinicalSchema.statics.findByPatientId = function(patientId) {
    return this.find({ Patient: patientId });
  };

const Clinical = mongoose.model('Clinical', clinicalSchema);

module.exports = Clinical;