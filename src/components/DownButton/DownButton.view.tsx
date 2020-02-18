import { Button, GridContainer, Icon } from './DownButton.style'

import { Grid } from '@material-ui/core'
import React from 'react'

type ViewProps = {
    isScrolling: boolean
}

export default ({ isScrolling }: ViewProps) => {
    return (
        <GridContainer container justify="center">
            <Grid item>
                <Button>
                    <Icon isScrolling={isScrolling} />
                </Button>
            </Grid>
        </GridContainer>
    )
}
