import {
    BackSide,
    BufferGeometry,
    CanvasTexture,
    FrontSide,
    LinearFilter,
    Side,
    Texture,
} from 'three'
import { Canvas, TestCanvas, TestCanvasGrid } from './SplitCylinderScene.view.style'
import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { useFrame, useResource } from 'react-three-fiber'

import Controls from '~/components/Controls'
import { Grid } from '@material-ui/core'

type MaterialProps = {
    texture: Texture
    side: Side
}

const Material = ({ texture, side }: MaterialProps) => (
    <meshBasicMaterial attach="material" map={texture} color={'white'} side={side} transparent />
)

type ImageTextureProps = {
    isHover: boolean
    setIsHover(isHover: boolean): void
}

const ImageTexture = ({ isHover, setIsHover }: ImageTextureProps) => {
    const [rotation, setRotation] = useState(0)
    const [geometryRef, geometry] = useResource<BufferGeometry>()
    const [textureRef, texture] = useResource<CanvasTexture>()
    const [speed, setSpeed] = useState(0.01)

    const canvasWidth = 2048,
        canvasHeight = canvasWidth / 4,
        radiusTop = canvasWidth / (2 * Math.PI),
        radiusBottom = 1.2 * radiusTop,
        height = canvasHeight,
        radialSegments = 64,
        heightSegments = 1,
        isOpenEnded = true,
        thetaStart = 0,
        thetaLength = 2 * Math.PI,
        scale = 512 / canvasWidth

    const canvas = useMemo(() => {
        const ctx = document.createElement('canvas').getContext('2d')!
        ctx.canvas.width = canvasWidth
        ctx.canvas.height = canvasHeight
        ctx.fillStyle = 'white'
        ctx.font = `${canvasWidth / 19.1}px Arial`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText('MOVING BORDERS MOVING BORDERS', ctx.canvas.width / 2, ctx.canvas.height / 2)

        return ctx.canvas
    }, [canvasWidth, canvasHeight])

    useEffect(() => {
        setSpeed(isHover ? 0.02 : 0.01)
    }, [isHover])

    useFrame(() => {
        setRotation(rotation + speed)
    })

    return (
        <>
            <cylinderBufferGeometry
                ref={geometryRef}
                args={[
                    radiusTop,
                    radiusBottom,
                    height,
                    radialSegments,
                    heightSegments,
                    isOpenEnded,
                    thetaStart,
                    thetaLength,
                ]}
            />
            <canvasTexture ref={textureRef} image={canvas} minFilter={LinearFilter} />
            <group
                scale={[scale, scale, scale]}
                rotation={[0.4, -rotation, 0]}
                onPointerOver={() => setIsHover(true)}
                onPointerOut={() => setIsHover(false)}
            >
                <mesh renderOrder={2} geometry={geometry}>
                    <Material texture={texture} side={FrontSide} />
                </mesh>
                <mesh geometry={geometry}>
                    <Material texture={texture} side={BackSide} />
                </mesh>
            </group>
        </>
    )
}

type ViewProps = {
    controlsOpacity: number
}

export default ({ controlsOpacity }: ViewProps) => {
    // todo: hover with raycasting?
    const [isHover, setIsHover] = useState(false)
    const testCanvas = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        if (testCanvas.current) {
            const ctx = testCanvas.current.getContext('2d')!
            const text = 'MOVE'
            const canvasWidth = 256
            const textHeight = 15
            testCanvas.current.width = canvasWidth
            ctx.font = `${textHeight}pt Arial`
            ctx.fillStyle = 'white'
            const textWidth = ctx.measureText(text).width
            const aspectRatio = textWidth / textHeight
            const canvasHeight = canvasWidth / aspectRatio
            // testCanvas.current.height = canvasHeight

            ctx.scale(canvasWidth / textWidth, canvasHeight / textHeight)
            ctx.fillText(text, 0, textHeight)
            ctx.restore()
        }
    }, [testCanvas.current])

    return (
        <>
            <TestCanvasGrid container alignItems="center" justify="center">
                <Grid item>
                    <TestCanvas ref={testCanvas} />
                </Grid>
            </TestCanvasGrid>
            <Canvas camera={{ position: [0, 0, 200] }} isHover={isHover}>
                <Suspense fallback={null}>
                    <ImageTexture isHover={isHover} setIsHover={setIsHover} />
                </Suspense>
            </Canvas>
        </>
    )
}
