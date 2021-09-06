import { NextApiHandler } from 'next'
import { storeEndpoint } from '../../../config'

const handler: NextApiHandler = async (req, res) => {
  const { key, quantity } = req.body
  const response = await fetch(
    `${storeEndpoint}/cart/update-item?key=${key}&quantity=${quantity}`,
    {
      method: 'post',
      headers: {
        'content-type': 'application/json',
        cookie: req.headers.cookie || '',
        ...Object.entries(req.cookies).reduce(
          (acc, [k, v]) => ({ ...acc, [k]: v }),
          {},
        ),
      },
    },
  )
  res.status(200).json(await response.json())
}

export default handler
