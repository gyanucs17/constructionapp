const mongoose = require('mongoose');

const materialMasterSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    htitle: {
        type: String,
        required: true
    },
    image: {
        type: String
    },

    mtype: {
        type: String,
    }, 
    rate: {
        type: String,
        required: true
    },
    crearedBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    creatrdOn: {
        type: Date,
        default: Date.now
    },
    Desc: {
        type: String,
        default: "Construction Material"
    }
});


module.exports = mongoose.model('MaterialMaster', materialMasterSchema);