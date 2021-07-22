import app from '../infra/web/configs/App'
import { database } from '../infra/database/MongoDB'
import { MONGO_URI } from '../infra/config/Env'

async function main (): Promise<any> {
  await database.connect(MONGO_URI)
  app.listen(3333, () => console.log('Server is Running!'))
}

main().catch(console.error)
