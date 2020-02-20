import { Button, GridContainer, Icon } from './EditButton.style'

import { Grid } from '@material-ui/core'
import React from 'react'

type ViewProps = {
    onClick(): void
}
export default ({ onClick }: ViewProps) => {
    return (
        <GridContainer container alignItems="center">
            <Grid item>
                <Button onClick={onClick}>
                    <Icon />
                </Button>
            </Grid>
        </GridContainer>
    )
}
