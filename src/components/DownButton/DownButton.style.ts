import { Grid, IconButton, Theme } from '@material-ui/core'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import styled from 'styled-components'

export const GridContainer = styled(Grid)`
    ${({ theme }) => `
        position: fixed;
        bottom: ${theme.spacing(1)};
        z-index: 1000;
  `}
`

export const Button = styled(IconButton)``

type IconProps = {
    theme: Theme
    isScrolling: boolean
}

export const Icon = styled(ExpandMoreIcon)`
    ${({ theme, isScrolling }: IconProps) => `
        opacity: 0.5;
        width: ${isScrolling ? theme.spacing(30) : theme.spacing(24)};
        height: ${isScrolling ? theme.spacing(30) : theme.spacing(24)};
        transition: all 0.1s ease-in-out
  `}
`
