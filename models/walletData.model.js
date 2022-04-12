const mongoose = require("mongoose")

const dataSchema = new mongoose.Schema({
    data: {
        type: Object,
        required: true,
    }
}, {
    timestamps: true,
})

const walletDataModel = mongoose.model('walletData',dataSchema)

module.exports = walletDataModel