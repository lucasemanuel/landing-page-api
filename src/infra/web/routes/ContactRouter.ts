import ExpressAdapter from '../adapters/ExpressAdapter'
import RegisterContactControllerComposer from '../composers/RegisterContactControllerComposer'
import { Router } from 'express'

const ContactRouter = Router()

const registerContactControllerCompose = RegisterContactControllerComposer.compose()
ContactRouter.post('/', ExpressAdapter.adapt(registerContactControllerCompose))

export default ContactRouter
