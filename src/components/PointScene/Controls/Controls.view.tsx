import { Grid, Slider, Typography } from '@material-ui/core'
import React, { useCallback, useEffect, useRef } from 'react'

import { Controls } from './Controls.style'
import ReactDOM from 'react-dom'

type Controls = {
    radius: number
    setRadius(radius: number): void
    widthSegments: number
    setWidthSegments(widthSegments: number): void
    heightSegments: number
    setHeightSegments(heightSegments: number): void
}

type ViewProps = {
    controlsOpacity: number
    isEditMode: boolean
    setIsEditMode(isEditMode: boolean): void
    controls: Controls
}

export default ({ controlsOpacity, isEditMode, setIsEditMode, controls }: ViewProps) => {
    const controlsRef = useRef<HTMLDivElement>(null)

    const handleClick = useCallback(
        (event: MouseEvent) => {
            event.stopPropagation()

            if (
                controlsRef.current &&
                isEditMode &&
                !controlsRef.current.contains(event.target as Node)
            ) {
                console.log('setIsEditMode', false)
                setIsEditMode(false)
            }
        },
        [isEditMode, setIsEditMode, controlsRef]
    )

    useEffect(() => {
        document.addEventListener('click', handleClick)
    }, [])

    return isEditMode ? (
        <Controls
            container
            spacing={2}
            justify="center"
            opacity={controlsOpacity}
            ref={controlsRef}
        >
            <Grid item xs={2}>
                <Typography>Radius</Typography>
                <Slider
                    value={controls.radius}
                    min={6}
                    max={24}
                    onChange={(event: any, newValue: number | number[]) => {
                        controls.setRadius(newValue as number)
                    }}
                />
            </Grid>
            <Grid item xs={2}>
                <Typography>Width Segments</Typography>
                <Slider
                    value={controls.widthSegments}
                    min={6}
                    max={24}
                    onChange={(event: any, newValue: number | number[]) => {
                        controls.setWidthSegments(newValue as number)
                    }}
                />
            </Grid>
            <Grid item xs={2}>
                <Typography>Height Segments</Typography>
                <Slider
                    value={controls.heightSegments}
                    min={6}
                    max={24}
                    onChange={(event: any, newValue: number | number[]) => {
                        controls.setHeightSegments(newValue as number)
                    }}
                />
            </Grid>
        </Controls>
    ) : (
        <></>
    )
}
