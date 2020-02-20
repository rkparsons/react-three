import { FadeIn, Grid } from './ControlGrid.style'
import React, { ReactNode, useEffect, useState } from 'react'

type ViewProps = {
    opacity: number
    children: ReactNode
}

export default ({ opacity, children }: ViewProps) => {
    const [fadeInOpacity, setFadeInOpacity] = useState(0)

    useEffect(() => {
        setFadeInOpacity(1)
    }, [])

    return (
        <FadeIn opacity={fadeInOpacity}>
            <Grid container spacing={4} justify="center" opacity={opacity}>
                {children}
            </Grid>
        </FadeIn>
    )
}
