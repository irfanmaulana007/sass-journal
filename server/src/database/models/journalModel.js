import mongoose from 'mongoose'

const journalSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique:true
    },
    description:{
        type: String,
    },
    date: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

const Journal = mongoose.model('Journal', journalSchema)

export default Journal