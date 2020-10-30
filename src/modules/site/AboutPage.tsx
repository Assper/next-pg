import NextLink from 'next/link'
import { Grid } from '@/common/components/Grid'
import React, { ReactElement } from 'react'
import { useService } from '@/common/hooks/useService'
import { IntlService } from '@/common/services/IntlService'

function AboutPage(): ReactElement {
  const { service } = useService(IntlService)

  return (
    <Grid>
      <p>{service.getMessage('about')}</p>
      <NextLink href="/" as="/">
        {service.getMessage('homeLink')}
      </NextLink>
    </Grid>
  )
}

export default AboutPage
