import { NextApiHandler } from 'next'
import { endpoint } from '../../config'
import { parseSetCookie } from '../../utils'

const handler: NextApiHandler = async (req, res) => {
  const { username, password } = req.body
  console.log({ username, password })
  const response = await fetch(`${endpoint}/wp-login.php`, {
    // body: `log=${username}&pwd=${password}&rememberme=forever`,
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    body: 'log=achilles&pwd=password&rememberme=forever&wp-submit=Log+In&testcookie=1',
    // body: `log=${username}&pwd=${password}&rememberme=forever`,
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
  })
  const cookie = parseSetCookie(response.headers)
  res.setHeader('set-cookie', cookie).status(200).json({ name: 'John Doe' })
}

export default handler
