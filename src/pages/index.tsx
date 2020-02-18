import { Card, Grid } from '@material-ui/core'
import React, { useState } from 'react'

import BoxScene from '~/components/BoxScene'
import { Canvas } from 'react-three-fiber'
import Head from '~/components/Head'
import PointScene from '~/components/PointScene'
import Scene from '~/components/Scene'
import TextScene from '~/components/TextScene'
import { graphql } from 'gatsby'

export default () => {
    const scenes = [BoxScene, TextScene, PointScene].map((Component, index) => (
        <Scene key={index}>
            <Component />
        </Scene>
    ))
    return (
        <>
            <Head title="Home" />
            <Grid container alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
                <Grid item>{scenes}</Grid>
            </Grid>
        </>
    )
}
