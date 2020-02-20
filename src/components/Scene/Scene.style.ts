import { Box as BoxBase } from '@material-ui/core'
import styled from 'styled-components'

export const SceneBox = styled(BoxBase)`
    position: relative;
    width: 100vw !important;
    height: 100vh !important;
`

type BoxProps = {
    opacity: number
}

export const ButtonBox = styled(BoxBase)`
    ${({ opacity }: BoxProps) => `
        opacity: ${opacity};
    `}
`

export const FadeBox = styled(BoxBase)`
    ${({ opacity }: BoxProps) => `
        width: 100%;
        height: 100%;
        opacity: ${opacity};
        transition: opacity 2s ease-in;
    `}
`
