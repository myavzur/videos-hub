import { HttpException, HttpStatus } from "@nestjs/common"

export class OkException extends HttpException {
  constructor(response?: string) {
    super(`${response || 'Everything ok. Keep doing...'}`, HttpStatus.OK)
  }
}