import { Grid } from '@/common/components/Grid'
import { Title } from '@/common/components/Title'
import React, { ReactElement, useCallback } from 'react'
import { useStateObserver } from '@/common/hooks/useStateObserver'
import { ObserverService } from '@/common/services/ObserverService'
import { Button } from '@/common/components/Button'

function HomePage(): ReactElement {
  const state = useStateObserver()
  const observer = ObserverService.instance()
  const toggleLang = useCallback((lang: string) => observer.setLang(lang), [
    observer
  ])

  return (
    <Grid>
      <p>
        <Button onClick={() => toggleLang('en')}>en</Button>
        <Button onClick={() => toggleLang('ru')}>ru</Button>
      </p>
      <Title>{state.lang}</Title>
    </Grid>
  )
}

export default HomePage
