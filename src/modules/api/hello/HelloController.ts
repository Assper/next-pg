import { Get } from '../decorators/http'
import { Context } from '../types'

export class HelloController {
  @Get()
  hello(ctx: Context): string {
    return 'hello'
  }
}
