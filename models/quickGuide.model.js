const mongoose = require("mongoose")

const dataSchema = new mongoose.Schema({
    data: {
        type: Object,
        required: true,
    }
}, {
    timestamps: true,
})

const quickGuideModel = mongoose.model('quickGuide',dataSchema)

module.exports = quickGuideModel