interface EmailService {
  send: (emailTo: string) => Promise<void>
}

export default EmailService
