import { Grid } from '@/common/components/Grid'
import { Title } from '@/common/components/Title'
import React, { ReactElement, useCallback } from 'react'
import { useStateObserver } from '@/common/hooks/useStateObserver'
import { ObserverService } from '@/common/services/ObserverService'

function HomePage(): ReactElement {
  const state = useStateObserver()
  const observer = ObserverService.instance()
  const toggleLang = useCallback((lang: string) => observer.setLang(lang), [
    observer
  ])

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

export default HomePage
