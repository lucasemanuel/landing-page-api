import Bull from 'bull'
import config from '../config/BullRedis'
import SendEmailJob from './SendEmailJob'

const queue = new Bull(SendEmailJob.name, config)
queue
  .process(async job => {
    const { emailTo, email } = job.data
    await SendEmailJob.handle(emailTo, email)
  })
  .catch(console.error)

export default queue
