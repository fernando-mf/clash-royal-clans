import axios from 'axios'

import { CONFIG } from '../Config'

interface CRRequestParams {
  path: string[]
  params?: Record<string, string>
  data?: any
}

export async function CRRequest<T = any>({
  path,
  params,
  data,
}: CRRequestParams) {
  return axios({
    baseURL: CONFIG.CR_API.BASE_URL,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${CONFIG.CR_API.TOKEN}`,
    },
    url: path.join('/'),
    params,
    data,
  }).then(res => res.data as T)
}
