import { Subject, Subscription } from 'rxjs'

export type State = Record<string, any>

export abstract class ObserverService {
  protected subject = new Subject<State>()

  protected update(state: State): void {
    this.subject.next(state)
  }

  abstract getState(): State

  subscribe(
    setState: (state: State) => void,
    complete?: () => void
  ): Subscription {
    return this.subject.subscribe(setState, console.error, complete)
  }

  unsubscribe(sub: Subscription): void {
    sub.unsubscribe()
  }
}
