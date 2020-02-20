import { Box as BoxBase } from '@material-ui/core'
import styled from 'styled-components'

export const SceneBox = styled(BoxBase)`
    position: relative;
    width: 100vw !important;
    height: 100vh !important;
`

type ButtonBoxProps = {
    opacity: number
}

export const ButtonBox = styled(BoxBase)`
    ${({ opacity }: ButtonBoxProps) => `
        opacity: ${opacity};
    `}
`
