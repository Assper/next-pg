import { Grid } from '@/common/components/Grid'
import { Title } from '@/common/components/Title'
import React, { ReactElement, useCallback, useEffect, useState } from 'react'
import observable, { ObservableProps } from '@/common/hoc/observable'
import { Subscription } from 'rxjs'
import { State, initial } from '@/common/services/ObserverService'

function HomePage({ observer, subscriptions }: ObservableProps): ReactElement {
  const [state, setState] = useState<State>(initial)
  const toggleLang = useCallback((lang: string) => observer.setLang(lang), [
    observer
  ])

  useEffect((): (() => void) => {
    subscriptions.push(observer.subscribe(setState))

    return (): void =>
      subscriptions.forEach((sub: Subscription): void => sub.unsubscribe())
  }, [observer, subscriptions])

  return (
    <Grid>
      <p>
        <span onClick={() => toggleLang('en')}>en</span>
        <span onClick={() => toggleLang('ru')}>ru</span>
      </p>
      <Title>{state.lang}</Title>
    </Grid>
  )
}

export default observable(HomePage)
