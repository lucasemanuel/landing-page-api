import 'dotenv/config'
import yn from 'yn'

export const PORT = parseInt(process.env.PORT ?? '0')

export const MONGO_PORT = parseInt(process.env.MONGO_PORT ?? '0')
export const MONGO_HOST = process.env.MONGO_HOST ?? ''
export const MONGO_USER = process.env.MONGO_USER ?? ''
export const MONGO_PASSWORD = process.env.MONGO_PASSWORD ?? ''

export const MAIL_HOST = process.env.MAIL_HOST ?? ''
export const MAIL_PORT = parseInt(process.env.MAIL_PORT ?? '0')
export const MAIL_REQUIRE_TLS = yn(process.env.MAIL_REQUIRE_TLS) ?? false
export const MAIL_USER = process.env.MAIL_USER ?? ''
export const MAIL_PASSWORD = process.env.MAIL_PASSWORD ?? ''

export const MAIL_FROM_NAME = process.env.MAIL_FROM ?? ''
export const MAIL_FROM_EMAIL = process.env.MAIL_FROM_EMAIL ?? ''

export const REDIS_PORT = parseInt(process.env.REDIS_PORT ?? '0')
export const REDIS_HOST = process.env.REDIS_HOST ?? ''
