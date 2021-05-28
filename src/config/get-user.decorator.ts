import { createParamDecorator } from '@nestjs/common';

export const AuthUser = createParamDecorator(async (data, ctx) => {
  const req = ctx.switchToHttp().getRequest();
  console.log(req.user);
  return req.user;
});
