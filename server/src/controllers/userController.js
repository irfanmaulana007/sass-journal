import asyncHandler from 'express-async-handler'

import Journal from '../database/models/journalModel.js'

export const getAll = asyncHandler(async(req, res) => {
    const journals = await Journal.find({})
    res.json(journals)
})

export const getById = asyncHandler(async(req, res) => {
    const journal = await Journal.findById(req.params.id)

    if (journal) {
        res.json(journal)
    } else {
        res.status(404).json({ message: "Journal not found" })
        res.status(404)
        throw new Error('Journal not found')
    }
})