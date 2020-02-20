import { FadeIn, GridContainer } from './Controls.style'
import { Grid, Slider, Typography } from '@material-ui/core'
import React, { ReactNode, useEffect, useState } from 'react'

type ViewProps = {
    opacity: number
    controls: Control[]
}

export default ({ opacity, controls }: ViewProps) => {
    const [fadeInOpacity, setFadeInOpacity] = useState(0)

    useEffect(() => {
        setFadeInOpacity(1)
    }, [])

    return (
        <FadeIn opacity={fadeInOpacity}>
            <GridContainer container spacing={4} justify="center" opacity={opacity}>
                {controls.map(control => (
                    <Grid item xs={2}>
                        <Typography>{control.label}</Typography>
                        <Slider
                            value={control.value}
                            min={control.min}
                            max={control.max}
                            onChange={(event: any, newValue: number | number[]) => {
                                control.set(newValue as number)
                            }}
                        />
                    </Grid>
                ))}
            </GridContainer>
        </FadeIn>
    )
}
