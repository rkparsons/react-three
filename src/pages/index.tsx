import { Card, Grid } from '@material-ui/core'

import BoxScene from '~/components/BoxScene'
import { Canvas } from 'react-three-fiber'
import Head from '~/components/Head'
import PointScene from '~/components/PointScene'
import React from 'react'
import Scene from '~/components/Scene'
import TextScene from '~/components/TextScene'
import { graphql } from 'gatsby'

export default () => (
    <>
        <Head title="Home" />
        <ul>
            <li>3d character surrounded by radial menu</li>
            <li>scroll with depth perception effect</li>
        </ul>
        <Grid container spacing={2}>
            <Scene>
                <BoxScene />
            </Scene>
            <Scene>
                <TextScene />
            </Scene>
            <Scene>
                <PointScene />
            </Scene>
        </Grid>
    </>
)
