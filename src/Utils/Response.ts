import { APIGatewayProxyResult } from 'aws-lambda'

enum HTTPStatus {
  OK = 200,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}

const ResponseCreator = (code: HTTPStatus) => (
  data: any,
): APIGatewayProxyResult => ({
  body: JSON.stringify(data),
  statusCode: code,
})

export const Ok = ResponseCreator(HTTPStatus.OK)
export const BadRequest = ResponseCreator(HTTPStatus.BAD_REQUEST)
export const NotFound = ResponseCreator(HTTPStatus.NOT_FOUND)
export const ServerError = ResponseCreator(HTTPStatus.SERVER_ERROR)
