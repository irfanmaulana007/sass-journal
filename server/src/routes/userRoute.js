import express from 'express'

import { getAll, getById } from './../controllers/userController.js'

const router = express.Router()

router.route('/').get(getAll)
router.route('/:id').get(getById)
    
export default router