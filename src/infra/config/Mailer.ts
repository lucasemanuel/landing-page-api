import nodemailer from 'nodemailer'
import {
  MAIL_HOST,
  MAIL_PASSWORD,
  MAIL_PORT,
  MAIL_REQUIRE_TLS,
  MAIL_USER
} from './Env'

const Mailer = nodemailer.createTransport({
  host: MAIL_HOST,
  port: MAIL_PORT,
  requireTLS: MAIL_REQUIRE_TLS,
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASSWORD
  }
})

export default Mailer
