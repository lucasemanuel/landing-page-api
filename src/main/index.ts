import app from '../infra/web/configs/App'
import { database } from '../infra/database/MongoDB'
import { MONGO_URI } from '../infra/config/Env'
import queue from '../infra/queue/EmailQueueBull'

async function main (): Promise<any> {
  await database.connect(MONGO_URI)
  app.listen(3333, () => console.log('Server is Running!'))

  queue.on('failed', (job, err) => {
    console.log('Job failed', queue.name, job.data)
    console.log(err)
  })
}

main().catch(console.error)
