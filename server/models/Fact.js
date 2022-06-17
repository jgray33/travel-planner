const {Schema, model } = require("mongoose")

const factSchema = new Schema({
    description: {
        type: String
    },
    plan: {
        type: Schema.Types.ObjectId,
        ref: "Plan"
    }
})

const Fact = model("Fact", factSchema)

module.exports = Fact