import EmailEntity from '../../domain/entities/EmailEntity'
import Mailer from '../config/Mailer'
import { MAIL_FROM_EMAIL, MAIL_FROM_NAME } from '../config/Env'

abstract class SendEmailJob {
  public readonly name: 'SendEmail'

  public static async handle (
    emailTo: string,
    email: EmailEntity
  ): Promise<void> {
    const { body, subject } = email
    await Mailer.sendMail({
      from: `"${MAIL_FROM_EMAIL}" <${MAIL_FROM_NAME}>`,
      to: [emailTo],
      subject,
      text: body.text
    })
  }
}

export default SendEmailJob
