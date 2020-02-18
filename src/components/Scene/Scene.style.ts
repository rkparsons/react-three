import {
    CardActions as CardActionsBase,
    Card as CardBase,
    CardContent as CardContentBase,
    Grid as GridBase,
} from '@material-ui/core'

import styled from 'styled-components'

// export const Grid = styled(({ isFullScreen, children }: GridProps) => (
//     <GridBase item xs={12} md={isFullScreen ? 12 : 6} lg={isFullScreen ? 12 : 4}>
//         {children}
//     </GridBase>
// ))`
//     position: relative;
//     height: ${({ isFullScreen }) => (isFullScreen ? '100%' : '250px')};
// `

export const Card = styled(CardBase)`
    position: relative;
`

export const CardContent = styled(CardContentBase)`
    height: 100%;
`

export const CardActions = styled(CardActionsBase)`
    position: absolute;
    bottom: 0;
`
