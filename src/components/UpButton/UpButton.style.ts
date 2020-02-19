import { Grid, Theme } from '@material-ui/core'

import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import styled from 'styled-components'

export const GridContainer = styled(Grid)`
    ${({ theme }) => `
        position: fixed;
        top: ${theme.spacing(1)};
        z-index: 1000;
  `}
`

type IconProps = {
    theme: Theme
    emphasis: number
}

export const Icon = styled(ExpandLessIcon)`
    ${({ theme, emphasis }: IconProps) => `
        opacity: 0.5;
        width: ${theme.spacing(24 + emphasis)};
        height: ${theme.spacing(24 + emphasis)};
        transition: all 0.15s linear
  `}
`
