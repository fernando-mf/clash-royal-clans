import {
  APIGatewayProxyHandler,
  Context,
  APIGatewayProxyResult,
  APIGatewayProxyEvent,
} from 'aws-lambda'
import { serializeError } from 'serialize-error'

import { ServerError } from './Response'

type ApiEvent = Omit<APIGatewayProxyEvent, 'body'> & {
  body: Record<string, any>
}

type ApiHandler = (
  event: ApiEvent,
  context: Context,
) => Promise<APIGatewayProxyResult>

export const Handler = (proxy: ApiHandler): APIGatewayProxyHandler => async (
  event,
  context,
) => {
  try {
    const parsedBody = JSON.parse(event.body || '{}')
    const response = await proxy({ ...event, body: parsedBody }, context)
    return response
  } catch (err) {
    if (event.requestContext.stage === 'dev') {
      return ServerError(serializeError(err))
    }

    return ServerError('Internal server error.')
  }
}
