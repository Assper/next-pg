import { Subject, Subscription } from 'rxjs'

export type State = {
  lang: string
}

export const initial: State = {
  lang: 'en'
}

export class ObserverService {
  private subject = new Subject<State>()
  private state = initial
  private static self: ObserverService | null = null

  static instance(): ObserverService {
    if (!this.self) {
      this.self = new ObserverService()
    }

    return this.self
  }

  private constructor() {
    this.update()
  }

  private update(): void {
    this.subject.next(this.state)
  }

  subscribe(
    setState: (state: State) => void,
    complete?: () => void
  ): Subscription {
    return this.subject.subscribe(setState, console.error, complete)
  }

  unsubscribe(sub: Subscription): void {
    sub.unsubscribe()
  }

  setLang(lang: string): void {
    this.state = { lang }
    this.update()
  }
}
