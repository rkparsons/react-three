import { Grid as GridBase, Theme } from '@material-ui/core'

import { Box } from '@material-ui/core'
import styled from 'styled-components'

type ControlsProps = {
    theme: Theme
    opacity: number
}

export const Grid = styled(GridBase)`
    ${({ theme, opacity }: ControlsProps) => ` 
        position: fixed;
        opacity: ${opacity};
        transition: opacity 0.1s linear;
        z-index: ${opacity === 0 ? 0 : 1000};
        width: 100%;
        bottom: ${theme.spacing(20)};
  `}
`
type FadeInProps = {
    opacity: number
}

export const FadeIn = styled(Box)`
    ${({ opacity }: FadeInProps) => ` 
        opacity: ${opacity};
        transition: opacity 2s linear 0.5s;
  `}
`
