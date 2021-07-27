import 'dotenv/config'
import yn from 'yn'

export const MONGO_URI = process.env.MONGO_URI ?? ''
export const PORT = process.env.PORT ?? 0

export const MAIL_HOST = process.env.MAIL_HOST ?? ''
export const MAIL_PORT = parseInt(process.env.MAIL_PORT ?? '0')
export const MAIL_REQUIRE_TLS = yn(process.env.MAIL_REQUIRE_TLS) ?? false
export const MAIL_USER = process.env.MAIL_USER ?? ''
export const MAIL_PASSWORD = process.env.MAIL_PASSWORD ?? ''

export const MAIL_FROM_NAME = process.env.MAIL_FROM ?? ''
export const MAIL_FROM_EMAIL = process.env.MAIL_FROM_EMAIL ?? ''
