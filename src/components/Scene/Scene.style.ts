import { Box as BoxBase } from '@material-ui/core'
import styled from 'styled-components'

type BoxProps = {
    opacity: number
}

export const SceneBox = styled(BoxBase)`
    ${({ opacity }: BoxProps) => `
        position: relative;
        opacity: ${opacity};
        width: 100vw !important;
        height: 100vh !important;
    `}
`

export const ButtonBox = styled(BoxBase)`
    ${({ opacity }: BoxProps) => `
        opacity: ${opacity};
    `}
`
