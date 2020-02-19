import { Grid, Theme } from '@material-ui/core'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import styled from 'styled-components'

export const GridContainer = styled(Grid)`
    ${({ theme }) => `
        position: fixed;
        bottom: ${theme.spacing(1)};
        z-index: 1000;
  `}
`

type IconProps = {
    theme: Theme
    emphasis: number
}

export const Icon = styled(ExpandMoreIcon)`
    ${({ theme, emphasis }: IconProps) => `
        opacity: 0.5;
        width: ${theme.spacing(24 + emphasis)};
        height: ${theme.spacing(24 + emphasis)};
        transition: all 0.15s linear
  `}
`
