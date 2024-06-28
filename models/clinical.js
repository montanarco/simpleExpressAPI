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
        dafault: Date.now,
        required: true
    },
    Patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    }
});

const Clinical = mongoose.model('Clinical', clinicalSchema);

module.exports = Clinical;