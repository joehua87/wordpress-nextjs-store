import { NextApiHandler } from 'next'
import { endpoint } from '../../config'

const handler: NextApiHandler = async (req, res) => {
  //   const body = new FormData(req.body)
  //   const username = body.get('username')
  //   const password = body.get('password')
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
  const cookie =
    response.headers
      .get('set-cookie')
      ?.replace(/; secure/g, '')
      ?.split(/, wordpress_/)
      .map((x) => {
        if (x.startsWith('wordpress_')) {
          return x
        }
        return `wordpress_${x}`
      }) || []
  console.log(cookie)
  //   response.headers.forEach((v, k) => {
  //     if (k === 'set-cookie') {
  //       cookie.push(v.replace(/; secure/g, ''))
  //     }
  //   })
  //   console.log({ cookie })
  res.setHeader('set-cookie', cookie).status(200).json({ name: 'John Doe' })
}

export default handler
