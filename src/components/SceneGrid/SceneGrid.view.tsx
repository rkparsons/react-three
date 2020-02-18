import { GridContainer, GridItem } from './SceneGrid.style'
import React, { UIEvent, useEffect, useRef, useState } from 'react'

import BoxScene from '~/components/BoxScene'
import DownButton from '~/components/DownButton'
import PointScene from '~/components/PointScene'
import Scene from '~/components/Scene'
import TextScene from '~/components/TextScene'
import { Typography } from '@material-ui/core'
import UpButton from '~/components/UpButton'
import useWindowDimensions from '~/hooks/useWindowDimensions'

export default () => {
    const [position, setPosition] = useState(0)
    const { height } = useWindowDimensions()
    const boxScene = useRef<HTMLDivElement>(null)
    const textScene = useRef<HTMLDivElement>(null)
    const pointScene = useRef<HTMLDivElement>(null)
    const scenes = [boxScene, textScene, pointScene]

    useEffect(() => {
        console.log(scenes.map(scene => scene.current!.scrollTop))
    })

    const handleScroll = (e: React.UIEvent<HTMLElement>): void => {
        e.stopPropagation() // Handy if you want to prevent event bubbling to scrollable parent
        scenes.forEach(scene => {})
        const currentPosition = e.currentTarget.scrollTop
        // const closest = scenes
        //     .map(scene => scene.current!.getBoundingClientRect().y)
        //     .reduce(function(prev, curr) {
        //         return Math.abs(curr - currentPosition) < Math.abs(prev - currentPosition)
        //             ? curr
        //             : prev
        //     })
        setPosition(currentPosition)
    }

    return (
        <GridContainer onScroll={handleScroll} container alignItems="center" justify="center">
            <Typography style={{ position: 'absolute', left: 0 }}>{position % height}</Typography>
            <UpButton />
            <GridItem item ref={boxScene}>
                <Scene>
                    <BoxScene />
                </Scene>
            </GridItem>
            <GridItem item ref={textScene}>
                <Scene>
                    <TextScene />
                </Scene>
            </GridItem>
            <GridItem item ref={pointScene}>
                <Scene>
                    <PointScene />
                </Scene>
            </GridItem>
            <DownButton isScrolling={position % height > 0} />
        </GridContainer>
    )
}
