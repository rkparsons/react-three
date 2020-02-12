import BoxScene from '~/components/BoxScene'
import { Grid } from '@material-ui/core'
import Head from '~/components/Head'
import React from 'react'
import { graphql } from 'gatsby'

export default () => (
    <>
        <Head title="Home" />
        <ul>
            <li>3d character surrounded by radial menu</li>
            <li>scroll with depth perception effect</li>
        </ul>
        <Grid container>
            <Grid item xs={12} md={6}>
                <BoxScene />
            </Grid>
            <Grid item xs={12} md={6}>
                <BoxScene />
            </Grid>
        </Grid>
    </>
)
