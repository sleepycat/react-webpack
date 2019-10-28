import React from 'react'
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { Trans, t } from '@lingui/macro'
import { LocaleSwitcher } from './LocaleSwitcher'

export const App = () => (
  <I18nProvider i18n={i18n}>
    <section>
      <header>
        <LocaleSwitcher />
      </header>
      <main>
        <Trans>Hello from React</Trans>
      </main>
    </section>
  </I18nProvider>
)
