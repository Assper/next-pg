import NextLink from 'next/link'
import { Grid } from '@/common/components/Grid'
import { Title } from '@/common/components/Title'
import React, { ReactElement, useCallback } from 'react'
import { useService } from '@/common/hooks/useService'
import { Button } from '@/common/components/Button'
import { IntlService } from '@/common/services/IntlService'

function HomePage(): ReactElement {
  const { service, state } = useService(IntlService)
  const toggleLang = useCallback((lang: string) => service.setLang(lang), [
    service
  ])

  return (
    <Grid>
      <p>
        <Button onClick={() => toggleLang('en')}>en</Button>
        <Button onClick={() => toggleLang('ru')}>ру</Button>
      </p>
      <Title>{state.lang}</Title>
      <NextLink href="/about" as="/about">
        {service.getMessage('aboutLink')}
      </NextLink>
    </Grid>
  )
}

export default HomePage
