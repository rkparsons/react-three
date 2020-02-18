import {
    CardActions as CardActionsBase,
    Card as CardBase,
    CardContent as CardContentBase,
    Grid as GridBase,
} from '@material-ui/core'
import React, { ReactNode } from 'react'

import styled from 'styled-components'

type GridProps = {
    isFullScreen: boolean
    children: ReactNode
}

export const Grid = styled(({ isFullScreen, children }: GridProps) => (
    <GridBase item xs={12} md={isFullScreen ? 12 : 6} lg={isFullScreen ? 12 : 4}>
        {children}
    </GridBase>
))`
    transition: width 1s ease-in-out;
`

export const Card = styled(CardBase)`
    position: relative;
`

export const CardContent = styled(CardContentBase)`
    height: ${({ isFullScreen }: { isFullScreen: boolean }) => (isFullScreen ? '500px' : '250px')};
    transition: height 1s ease-in-out;
`

export const CardActions = styled(CardActionsBase)`
    position: absolute;
    bottom: 0;
`
