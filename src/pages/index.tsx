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
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    const setIsFullScreen = (index: number) => {
        if (activeIndex === null) {
            setActiveIndex(index)
        } else if (activeIndex === index) {
            setActiveIndex(null)
        }
    }

    const sceneComponents = [BoxScene, TextScene, PointScene].map((SceneComponent, index) => (
        <Scene
            isFullScreen={activeIndex === index}
            isVisible={activeIndex === null || activeIndex === index}
            setIsFullScreen={() => setIsFullScreen(index)}
        >
            <SceneComponent />
        </Scene>
    ))

    return (
        <>
            <Head title="Home" />
            <ul>
                <li>3d character surrounded by radial menu</li>
                <li>scroll with depth perception effect</li>
            </ul>
            <Grid container spacing={2}>
                {sceneComponents}
            </Grid>
        </>
    )
}
