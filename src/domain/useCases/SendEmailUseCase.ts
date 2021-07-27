import EmailService from '../services/EmailService'

class SendEmailUseCase {
  constructor (private readonly emailService: EmailService) {}

  public async execute (email: string): Promise<void> {
    await this.emailService.send(email)
  }
}

export default SendEmailUseCase
