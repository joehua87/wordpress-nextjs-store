import { NextApiHandler } from 'next'
import { storeEndpoint } from '../../config'

const handler: NextApiHandler = async (req, res) => {
  const response = await fetch(`${storeEndpoint}/cart`, {
    headers: {
      'content-type': 'application/json',
      cookie: req.headers.cookie || '',
      ...Object.entries(req.cookies).reduce(
        (acc, [k, v]) => ({ ...acc, [k]: v }),
        {},
      ),
    },
  })
  const nounce: string[] = []
  response.headers.forEach((v, k) => {
    if (k.startsWith('x-wc-store-api')) {
      nounce.push(`${k}=${v}; path=/`)
    }
  })
  res
    .setHeader('set-cookie', nounce)
    .status(200)
    .json(await response.json())
}

export default handler
