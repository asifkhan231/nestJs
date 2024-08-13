import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { Request } from 'express';

export const Cats = createParamDecorator(
    (data: any, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest<Request>()

        const reqData = request.body;
        console.log(reqData)
        console.log(data)

        return data ? reqData?.[data] : reqData
    }
)
