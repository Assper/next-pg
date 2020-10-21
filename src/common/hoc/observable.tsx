import React, { ComponentType, FunctionComponent, ReactElement } from 'react'
import { Subscription } from 'rxjs'
import { ObserverService } from '../services/ObserverService'

export type ObservableProps = {
  observer: ObserverService
  subscriptions: Subscription[]
}

const observer = ObserverService.instance()

function observable<T = Record<string, unknown>>(
  Wrapped: ComponentType<T>
): FunctionComponent {
  const ObservableComponent = (props: T): ReactElement<T & ObservableProps> => (
    <Wrapped {...props} observer={observer} subscriptions={[]} />
  )

  return ObservableComponent
}

export default observable
