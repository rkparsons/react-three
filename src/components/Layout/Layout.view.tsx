import { Container, Content, GlobalStyle } from './Layout.style'
import React, { ReactNode } from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import Footer from '~/components/Footer'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import Navigation from '~/components/Navigation'
import { ThemeProvider } from 'styled-components'
import theme from '~/styles/theme'

type Props = {
    isDarkMode: boolean
    setIsDarkMode: (isDarkMode: boolean) => void
    children: ReactNode
}

export default ({ isDarkMode, setIsDarkMode, children }: Props) => {
    const activeTheme = theme(true)

    return (
        <MuiThemeProvider theme={activeTheme}>
            <ThemeProvider theme={activeTheme}>
                <>
                    <CssBaseline />
                    <GlobalStyle />
                    <Container>
                        <Content>{children}</Content>
                        <Footer />
                    </Container>
                </>
            </ThemeProvider>
        </MuiThemeProvider>
    )
}
