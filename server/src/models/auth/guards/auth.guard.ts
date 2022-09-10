import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    // ? URLs from white list allowed to do anything
    // TODO: WTF?!?!!?
    const requestFromUrl = `${request.headers['x-forwarded-proto']}://${request.headers.host}`
    if (process.env.SERVER_CORS.split(', ').includes(requestFromUrl)) {
      return true
    }

    return Boolean(request?.session?.channel?.id) // Only indificated users could attach resource
  }
}