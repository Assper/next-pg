import { HelloController } from './hello/HelloController'

export class ApiModule {
  private static self: ApiModule | null = null
  private declarations = new WeakMap()

  private constructor() {
    this.declarations.set(HelloController, new HelloController())
  }

  static instance(): ApiModule {
    if (!this.self) {
      this.self = new ApiModule()
    }

    return this.self
  }

  get<T extends new (...args: any) => any>(key: T): InstanceType<T> {
    return this.declarations.get(key)
  }
}
