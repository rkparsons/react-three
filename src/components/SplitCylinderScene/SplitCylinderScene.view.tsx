import {
    BackSide,
    BufferGeometry,
    CanvasTexture,
    FrontSide,
    LinearFilter,
    Side,
    Texture,
} from 'three'
import { Canvas, TestCanvasGrid } from './SplitCylinderScene.view.style'
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
    canvas: HTMLCanvasElement
}

const ImageTexture = ({ isHover, setIsHover, canvas }: ImageTextureProps) => {
    const [rotation, setRotation] = useState(0)
    const [geometryRef, geometry] = useResource<BufferGeometry>()
    const [textureRef, texture] = useResource<CanvasTexture>()
    const [speed, setSpeed] = useState(0.01)

    const radiusTop = canvas.width / (2 * Math.PI),
        radiusBottom = radiusTop,
        height = canvas.height,
        radialSegments = 64,
        heightSegments = 1,
        isOpenEnded = true,
        thetaStart = 0,
        thetaLength = 2 * Math.PI,
        scale = 512 / canvas.width

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
    const [isHover, setIsHover] = useState(false)
    const canvasContainer = useRef<HTMLDivElement>(null)
    const isDebugCanvas = false

    const canvas = useMemo(() => {
        const ctx = document.createElement('canvas').getContext('2d')!
        const text = 'MOVING BORDERS MOVING BORDERS '
        const canvasWidth = 1024
        const textHeight = 64
        ctx.canvas.width = canvasWidth
        ctx.font = `${textHeight}pt Arial`
        const textWidth = ctx.measureText(text).width
        const aspectRatio = textWidth / textHeight
        const canvasHeight = Math.ceil(canvasWidth / aspectRatio)
        ctx.canvas.height = canvasHeight
        ctx.font = `${textHeight}pt Arial`
        ctx.fillStyle = 'white'

        ctx.scale(canvasWidth / textWidth, canvasHeight / textHeight)
        ctx.fillText(text, 0, textHeight - 1)

        return ctx.canvas
    }, [])

    useEffect(() => {
        if (isDebugCanvas && canvasContainer.current) {
            canvasContainer.current.appendChild(canvas)
        }
    }, [canvasContainer.current])

    return (
        <>
            <TestCanvasGrid container alignItems="center" justify="center">
                <Grid item>
                    <div ref={canvasContainer}></div>
                </Grid>
            </TestCanvasGrid>
            <Canvas camera={{ position: [0, 0, 200] }} isHover={isHover}>
                <Suspense fallback={null}>
                    <ImageTexture isHover={isHover} setIsHover={setIsHover} canvas={canvas} />
                </Suspense>
            </Canvas>
        </>
    )
}
