import { useEffect, useMemo, useState } from 'react'
import { Subscription } from 'rxjs'
import { ObserverService, State, initial } from '../services/ObserverService'

export function useStateObserver(): State {
  const [state, setState] = useState(initial)
  const subscriptions = useMemo((): Subscription[] => [], [])
  const observer = ObserverService.instance()

  useEffect((): (() => void) => {
    subscriptions.push(observer.subscribe(setState))
    console.log(subscriptions)

    return (): void =>
      subscriptions.forEach((sub: Subscription): void => sub.unsubscribe())
  }, [observer, subscriptions])

  return state
}
