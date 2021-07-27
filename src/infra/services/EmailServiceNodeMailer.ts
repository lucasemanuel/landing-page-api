import EmailEntity from '../../domain/entities/EmailEntity'
import EmailService from '../../domain/services/EmailService'
import Mailer from '../config/Mailer'
import { MAIL_FROM_EMAIL, MAIL_FROM_NAME } from '../config/Env'

class EmailServiceNodeMailer implements EmailService {
  constructor (private readonly email: EmailEntity) {}

  public async send (emailTo: string): Promise<void> {
    const { body, subject } = this.email
    await Mailer.sendMail({
      from: `"${MAIL_FROM_EMAIL}" <${MAIL_FROM_NAME}>`,
      to: [emailTo],
      subject,
      text: body.text
    })
  }
}

export default EmailServiceNodeMailer
