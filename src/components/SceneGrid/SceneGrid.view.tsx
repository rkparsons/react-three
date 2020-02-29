import { GridContainer, GridItem } from './SceneGrid.style'
import React, { UIEvent, useState } from 'react'

import BoxScene from '~/components/BoxScene'
import CanvasTextureScene from '~/components/CanvasTextureScene'
import ImageTextureScene from '~/components/ImageTextureScene'
import PointScene from '~/components/PointScene'
import Scene from '~/components/Scene'
import TextScene from '~/components/TextScene'
import { useWindowSize } from '~/hooks/useWindowSize'

export default () => {
    const windowSize = useWindowSize()
    const [position, setPosition] = useState(0)

    const scenes = [CanvasTextureScene, ImageTextureScene, BoxScene, TextScene, PointScene].map(
        (Component, index) => (
            <GridItem item key={index}>
                <Scene windowHeight={windowSize.height}>
                    {controlsOpacity => <Component controlsOpacity={controlsOpacity} />}
                </Scene>
            </GridItem>
        )
    )

    const handleScroll = (event: UIEvent<HTMLElement>): void => {
        event.stopPropagation()
        const currentPosition = event.currentTarget.scrollTop
        setPosition(currentPosition)
    }

    return (
        <GridContainer onScroll={handleScroll} container alignItems="center" justify="center">
            {scenes}
        </GridContainer>
    )
}
