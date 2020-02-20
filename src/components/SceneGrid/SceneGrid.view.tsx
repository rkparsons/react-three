import { GridContainer, GridItem } from './SceneGrid.style'
import React, { UIEvent, useRef, useState } from 'react'

import BoxScene from '~/components/BoxScene'
import Direction from '~/constants/direction'
import PointScene from '~/components/PointScene'
import Scene from '~/components/Scene'
import ScrollButton from '~/components/ScrollButton'
import TextScene from '~/components/TextScene'
import { useWindowSize } from '~/hooks/useWindowSize'

export default () => {
    const windowSize = useWindowSize()
    const [position, setPosition] = useState(0)
    const [isEditMode, setIsEditMode] = useState(false)
    // const [time, setTime] = useState(0)
    // const [speed, setSpeed] = useState(0)

    const scenes = [BoxScene, TextScene, PointScene].map((Component, index) => (
        <GridItem item key={index}>
            <Scene
                windowHeight={windowSize.height}
                isEditMode={isEditMode}
                setIsEditMode={setIsEditMode}
            >
                {(controlsOpacity, isEditMode) => (
                    <Component controlsOpacity={controlsOpacity} isEditMode={isEditMode} />
                )}
            </Scene>
        </GridItem>
    ))

    const handleScroll = (event: UIEvent<HTMLElement>): void => {
        event.stopPropagation()
        // const currentTime = event.timeStamp
        const currentPosition = event.currentTarget.scrollTop
        // const ellapsedTime = currentTime - time
        // const distancedTravelled = currentPosition - position
        // const speed = ellapsedTime === 0 ? 0 : distancedTravelled / ellapsedTime
        // setTime(currentTime)
        setPosition(currentPosition)
        // setSpeed(speed)
    }

    return (
        <GridContainer onScroll={handleScroll} container alignItems="center" justify="center">
            {/* <ScrollButton speed={speed} direction={Direction.Up} /> */}
            {scenes}
            {/* <ScrollButton speed={speed} direction={Direction.Down} /> */}
        </GridContainer>
    )
}
