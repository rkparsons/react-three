import { Button, GridContainer, Icon } from './EditButton.style'

import { Grid } from '@material-ui/core'
import React from 'react'

export default () => {
    return (
        <GridContainer container alignItems="center">
            <Grid item>
                <Button>
                    <Icon />
                </Button>
            </Grid>
        </GridContainer>
    )
}
