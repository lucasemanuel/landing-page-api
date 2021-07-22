import ContactRouter from './ContactRouter'
import { Router } from 'express'

const router = Router()

router.use('/contacts', ContactRouter)

export default router
