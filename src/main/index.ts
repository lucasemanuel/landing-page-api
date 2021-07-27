import app from '../infra/web/configs/App'
import queue from '../infra/queue/EmailQueueBull'
import { database } from '../infra/database/MongoDB'
import {
  MONGO_HOST,
  MONGO_PASSWORD,
  MONGO_PORT,
  MONGO_USER
} from '../infra/config/Env'

async function main (): Promise<any> {
  await database.connect(
    `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}`
  )
  app.listen(3333, () => console.log('Server is Running!'))

  queue.on('failed', (job, err) => {
    console.log('Job failed', queue.name, job.data)
    console.log(err)
  })
}

main().catch(console.error)
