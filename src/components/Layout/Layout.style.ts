import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html, body {
        height: 100vh;
        overflow: hidden;
    }
`

export const Container = styled.div`
    background: #0f0f0f;
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

export const Content = styled.div`
    flex-grow: 1;
`
