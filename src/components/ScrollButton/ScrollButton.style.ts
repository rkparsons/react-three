import { Grid, Theme } from '@material-ui/core'

import Direction from '~/constants/direction'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import styled from 'styled-components'

type GridProps = {
    theme: Theme
    scrollDirection: Direction
}

export const GridContainer = styled(Grid)`
    ${({ theme, scrollDirection }: GridProps) => `
        position: fixed;
        bottom: ${scrollDirection === Direction.Up ? 'auto' : theme.spacing(1)};
        top: ${scrollDirection === Direction.Down ? 'auto' : theme.spacing(1)};
        z-index: 1000;
  `}
`

type IconProps = {
    theme: Theme
    emphasis: number
}

function Icon(emphasis: number, theme: Theme) {
    return `
        opacity: ${0.2 + emphasis * 0.1};
        width: ${theme.spacing(24 + emphasis)};
        height: ${theme.spacing(24 + emphasis)};
        transition: height 0.15s linear, width 0.15s linear
  `
}

export const UpIcon = styled(ExpandLessIcon)`
    ${({ theme, emphasis }: IconProps) => Icon(emphasis, theme)}
`

export const DownIcon = styled(ExpandMoreIcon)`
    ${({ theme, emphasis }: IconProps) => Icon(emphasis, theme)}
`
