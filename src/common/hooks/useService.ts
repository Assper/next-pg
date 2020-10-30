import { useEffect, useMemo, useState } from 'react'
import { Subscription } from 'rxjs'
import { ObserverService, State } from '../services/ObserverService'

export function useService<T extends ObserverService>(
  Service: new () => T
): { state: State; service: T } {
  const subscriptions = useMemo((): Subscription[] => [], [])
  const service = useMemo((): T => new Service(), [])
  const [state, setState] = useState(service.getState())

  useEffect((): (() => void) => {
    subscriptions.push(service.subscribe(setState))
    return (): void =>
      subscriptions.forEach((sub: Subscription): void => sub.unsubscribe())
  }, [service, subscriptions])

  return { state, service }
}
