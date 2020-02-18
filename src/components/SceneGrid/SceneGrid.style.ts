import { Grid } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import styled from 'styled-components'

export const GridContainer = styled(Grid)`
    overflow: scroll;
    height: 100vh;
    scroll-snap-type: mandatory;
    scroll-snap-points-y: repeat(100vh);
    scroll-snap-type: y mandatory;
`

export const GridItem = styled(Grid)`
    height: 100vh;
    scroll-snap-align: start;
    position: relative;
`
