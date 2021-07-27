class EmailEntity {
  constructor (
    public readonly subject: string,
    public readonly body: EmailBody
  ) {}
}

interface EmailBody {
  text: string
  html?: string
}

export default EmailEntity
