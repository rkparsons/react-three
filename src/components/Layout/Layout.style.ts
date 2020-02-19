import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html, body {
        height: 100vh;
        overflow: hidden;
    }
    div {
        ::-webkit-scrollbar { 
            display: none;  /* Chrome Safari */
        }
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none;  /* IE 10+ */
        overflow-y:scroll;
        overflow-x:hidden;
    }
`

export const Container = styled.div`
    background: linear-gradient(to top right, #0b0b0b 0%, #0b0b0b 50%, #1b1b1b 50%, #1b1b1b 100%);
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

export const Content = styled.div`
    flex-grow: 1;
`
