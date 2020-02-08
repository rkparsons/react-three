import { Container, Content, GlobalStyle } from './Layout.style'
import React, { ReactNode } from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import Footer from '~/components/Footer'
import Navigation from '~/components/Navigation'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '~/styles/theme'

type Props = {
    isDarkMode: boolean
    setIsDarkMode: (isDarkMode: boolean) => void
    children: ReactNode
}

export default ({ isDarkMode, setIsDarkMode, children }: Props) => {
    return (
        <ThemeProvider theme={theme(isDarkMode)}>
            <CssBaseline />
            <GlobalStyle />
            <Container>
                <Content>
                    <Navigation />
                    <hr />
                    {children}
                </Content>
                <Footer />
            </Container>
        </ThemeProvider>
    )
}
