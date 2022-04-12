const homeHeroDataModel = require("../models/homeHeroData.model")

const homeHero = {
    /* 
        get data
    */
    getData: async (req, res) => {
        try {
            const data = await homeHeroDataModel.find({})
            return res.status(200).json({
                success: true,
                data: data
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error.message
            })
        }
    },
    /* 
        post data
    */
    addNewOne: async (req, res) => {
        try {
            const newData = new homeHeroDataModel({ ...req.body })
            await newData.save()
            return res.status(200).json({
                success: true,
                message: "Successfully New data added ."
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error.message
            })
        }
    },
    /* 
        update single data
    */
    updateData: async (req, res) => {
        const { id } = req.params
        const data = req.body
        try {
            const updateData = await homeHeroDataModel.findOneAndUpdate({ _id: id }, {
                data: data
            })
            return res.status(200).json({
                success: true,
                message: "Successfully updated"
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error.message
            })
        }
    },
    /* 
        delete data
    */
    deleteData: async (req, res) => {
        try {
            const removeData = await homeHeroDataModel.deleteOne({ _id: req.params.id })
            return res.status(200).json({
                success: true,
                message: "Successfully deleted."
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error.message
            })
        }
    }
}

module.exports = homeHero