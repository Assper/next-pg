import { ApiModule } from '@/modules/api'
import { HelloController } from '@/modules/api/hello/HelloController'
import { NextApiRequest, NextApiResponse } from 'next'

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const api = ApiModule.instance()
  const controller = api.get(HelloController)
  controller.hello({ req, res })
}

export default handler
