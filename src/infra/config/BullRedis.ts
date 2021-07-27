import { REDIS_HOST, REDIS_PORT } from './Env'

const config = {
  redis: {
    port: REDIS_PORT,
    host: REDIS_HOST
  }
}

export default config
