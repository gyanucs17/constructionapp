const mongoose = require('mongoose');

const productListSchema = new mongoose.Schema({
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
    sub_product: {
        type: String,
        required: true,
        default: "0"
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


module.exports = mongoose.model('ProductList', productListSchema);