import type { AppProps } from 'next/app'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { useState, useEffect } from 'react'

import GlobalStyle from 'src/styles/globalStyles'
import { theme } from 'src/styles/styledTheme'
import SeoHeadTags from 'src/components/Head/SeoHeadTags'
import AppContext from 'src/components/AppContext'
import { LoadingSpinner } from 'src/components/LoadingSpinner'

interface planetOptions {
  name?: string
  rotation_period?: string
  orbital_period?: string
  diameter?: string
  climate?: string
  gravity?: string
  terrain?: string
  surface_water?: number
  population?: number
  residents?: string[]
  films?: string[]
  created?: string
  edited?: string
  url?: string
}

const DATA_STATUS = {
  loading: 'loading',
  error: 'error',
  ok: 'ok',
}

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  //@viewOn:hooks
  const [planetList, setPlanetList] = useState<planetOptions[] | undefined>(
    undefined
  )
  const [loadDataStatus, setLoadDateStatus] = useState<string>(
    DATA_STATUS.loading
  )
  const [reloadData, setReloadData] = useState<number>(new Date().getTime())

  useEffect(() => {
    setLoadDateStatus(DATA_STATUS.loading)
    const getData = async () => {
      let query
      let response
      try {
        query = await fetch(`https://swapi.dev/api/planets`)
        response = await query.json()
      } catch (e) {
        setLoadDateStatus(DATA_STATUS.error)
        // better catch error and display to user any reason of fail. I just keep it as simple as possible.
      }
      setLoadDateStatus(DATA_STATUS.ok)
      setPlanetList(response?.results || [])
    }
    getData()
  }, [reloadData])
  //@viewOff:hooks

  const renderDueDataStatus = () => {
    switch (loadDataStatus) {
      case DATA_STATUS.error:
        return 'Data were no returned.'
      case DATA_STATUS.loading:
        return <LoadingSpinner />
      default:
        return <Component setReloadData={setReloadData} {...pageProps} />
    }
  }

  return (
    <StyledThemeProvider theme={theme}>
      <AppContext.Provider value={{ planetList, setPlanetList }}>
        <SeoHeadTags
          pageTitle='Next.js starter'
          description='Starting Next.js template with Typescript, styled-components and code-quality toooling'
        />
        {renderDueDataStatus()}
        <GlobalStyle />
      </AppContext.Provider>
    </StyledThemeProvider>
  )
}

export default MyApp
