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
    size: number
}

export const Icon = styled(ExpandMoreIcon)`
    ${({ theme, size }: IconProps) => `
        opacity: 0.5;
        width: ${theme.spacing(24 * size)};
        height: ${theme.spacing(24 * size)};
        transition: all 0.2s linear
  `}
`
