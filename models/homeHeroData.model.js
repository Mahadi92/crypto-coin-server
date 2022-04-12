const mongoose = require("mongoose")

const dataSchema = new mongoose.Schema({
    data: {
        type: Object,
        required: true,
    }
}, {
    timestamps: true,
})

const homeHeroDataModel = mongoose.model('homeHeroData',dataSchema)

module.exports = homeHeroDataModel