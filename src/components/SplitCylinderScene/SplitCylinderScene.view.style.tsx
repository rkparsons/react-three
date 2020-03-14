import { ContainerProps } from 'react-three-fiber/targets/shared/web/ResizeContainer'
import { Grid } from '@material-ui/core'
import { Canvas as R3FCanvas } from 'react-three-fiber'
import React from 'react'
import styled from 'styled-components'

type CanvasProps = ContainerProps & {
    isHover: boolean
}

export const Canvas = styled(({ isHover, ...rest }: CanvasProps) => <R3FCanvas {...rest} />)`
    ${({ isHover }: CanvasProps) => `
        cursor: ${isHover ? 'pointer' : 'default'};
    `}
`

export const TestCanvas = styled.canvas`
    border: 1px solid white;
`

export const TestCanvasGrid = styled(Grid)`
    width: 100%;
`
