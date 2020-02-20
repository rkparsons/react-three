import { Grid, Theme } from '@material-ui/core'

import styled from 'styled-components'

type ControlsProps = {
    theme: Theme
    opacity: number
}

export const Controls = styled(Grid)`
    ${({ theme, opacity }: ControlsProps) => `    
        position: fixed;
        opacity: ${opacity};
        z-index: 1000;
        width: 100%;
        bottom: ${theme.spacing(20)};
  `}
`
