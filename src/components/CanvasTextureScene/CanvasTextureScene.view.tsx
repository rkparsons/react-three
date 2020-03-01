import {
    BackSide,
    BufferGeometry,
    CanvasTexture,
    FrontSide,
    LinearFilter,
    Side,
    Texture,
} from 'three'
import { Canvas, useFrame, useResource } from 'react-three-fiber'
import React, { Suspense, useState } from 'react'

import Controls from '~/components/Controls'

type MaterialProps = {
    texture: Texture
    side: Side
}

const Material = ({ texture, side }: MaterialProps) => (
    <meshBasicMaterial attach="material" map={texture} color={'white'} side={side} transparent />
)

type ImageTextureProps = {
    position: number[]
}

const ImageTexture = ({ position }: ImageTextureProps) => {
    const [rotation, setRotation] = useState(0)
    const [geometryRef, geometry] = useResource<BufferGeometry>()
    const [textureRef, texture] = useResource<CanvasTexture>()

    const canvasWidth = 640,
        canvasHeight = 250,
        radiusTop = canvasWidth / (2 * Math.PI),
        radiusBottom = 1.4 * radiusTop,
        height = canvasHeight,
        radialSegments = 64,
        heightSegments = 1,
        isOpenEnded = true,
        thetaStart = 0,
        thetaLength = 2 * Math.PI
    const ctx = document.createElement('canvas').getContext('2d')!
    ctx.canvas.width = canvasWidth
    ctx.canvas.height = canvasHeight
    ctx.fillStyle = 'white'
    ctx.font = '25pt Arial'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('MOVING BORDERS MOVING BORDERS', ctx.canvas.width / 2, ctx.canvas.height / 2)

    useFrame(() => {
        setRotation(rotation + 10 / 1000)
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
            <canvasTexture ref={textureRef} image={ctx.canvas} minFilter={LinearFilter} />
            <group scale={[1, 1, 1]} rotation={[0.4, -rotation, 0]}>
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
    return (
        <>
            <Canvas camera={{ position: [0, 0, 200] }}>
                <Suspense fallback={null}>
                    <ImageTexture position={[0, 0, 0]} />
                </Suspense>
            </Canvas>
        </>
    )
}
