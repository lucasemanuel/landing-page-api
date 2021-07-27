import EmailEntity from '../../domain/entities/EmailEntity'
import EmailService from '../../domain/services/EmailService'
import queue from '../queue/EmailQueueBull'
import { Queue } from 'bull'

class EmailServiceNodeMailer implements EmailService {
  private readonly queue: Queue = queue

  constructor (private readonly email: EmailEntity) {}

  public async send (emailTo: string): Promise<void> {
    await this.queue.add({ emailTo, email: this.email }, { delay: 30000 })
  }
}

export default EmailServiceNodeMailer
