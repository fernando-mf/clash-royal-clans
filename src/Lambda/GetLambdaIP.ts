import axios from 'axios'

import { Handler } from '../Utils/Handler'
import { Ok } from '../Utils/Response'

export const handler = Handler(async () => {
  const ip = await axios
    .get('http://checkip.amazonaws.com')
    .then(res => res.data)

  return Ok(ip)
})
