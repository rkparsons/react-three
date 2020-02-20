import React, { ReactNode } from 'react'

import { Grid } from './ControlGrid.style'

type ViewProps = {
    opacity: number
    children: ReactNode
}

export default ({ opacity, children }: ViewProps) => (
    <Grid container spacing={4} justify="center" opacity={opacity}>
        {children}
    </Grid>
)
