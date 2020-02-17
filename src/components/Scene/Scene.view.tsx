import { Card, CardContent } from './Scene.style'
import React, { ReactNode } from 'react'

import { Grid } from '@material-ui/core'

type ViewProps = {
    children: ReactNode
}

export default ({ children }: ViewProps) => {
    return (
        <Grid item xs={12} md={6} lg={4}>
            <Card>
                <CardContent>{children}</CardContent>
            </Card>
        </Grid>
    )
}
