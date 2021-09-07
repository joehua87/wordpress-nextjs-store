import { NextApiHandler } from 'next'
import { storeEndpoint } from '../../../config'
import { parseSetCookie } from '../../../utils'

const handler: NextApiHandler = async (req, res) => {
  const { id, quantity } = req.body
  const response = await fetch(
    `${storeEndpoint}/cart/add-item?id=${id}&quantity=${quantity}`,
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

  const cookie = parseSetCookie(response.headers)

  res
    .setHeader('set-cookie', cookie)
    .status(200)
    .json(await response.json())
}

export default handler
