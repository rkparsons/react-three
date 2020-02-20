import { Grid, IconButton, Theme } from '@material-ui/core'

import CodeIcon from '@material-ui/icons/Code'
import styled from 'styled-components'

export const GridContainer = styled(Grid)`
    ${({ theme }) => `
        position: absolute;
        width: ${theme.spacing(50)};
        top: 0; 
        bottom: 0;
        left: ${theme.spacing(75)};
        z-index: 1;
  `}
`

export const Button = styled(IconButton)``

type IconProps = {
    theme: Theme
}

export const Icon = styled(CodeIcon)`
    ${({ theme }: IconProps) => `
        width: ${theme.spacing(24)};
        height: ${theme.spacing(24)};
        transition: opacity 0.5s linear;
  `}
`
