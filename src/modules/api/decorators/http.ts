import { StatusCodes } from 'http-status-codes'
import { HttpMethod } from '../enums/HttpMethods'
import { Context } from '../types'

function getRouteDecorator(method: HttpMethod): MethodDecorator {
  return (
    target: new (...args: any) => any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor => {
    const originalValue = descriptor.value

    descriptor.value = async (ctx: Context): Promise<void> => {
      if (method === ctx.req.method) {
        const data = await originalValue.apply(target, ctx)
        ctx.res.status(StatusCodes.OK).json(data)
      } else {
        ctx.res.status(StatusCodes.NOT_FOUND).json({ message: 'Not Found' })
      }
    }

    return descriptor
  }
}

export function Get(): MethodDecorator {
  return getRouteDecorator(HttpMethod.GET)
}

export function Post(): MethodDecorator {
  return getRouteDecorator(HttpMethod.POST)
}
