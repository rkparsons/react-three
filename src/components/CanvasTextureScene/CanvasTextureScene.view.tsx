import { Canvas, useFrame, useLoader, useThree } from 'react-three-fiber'
import { CanvasTexture, Color, DoubleSide, LinearFilter, Loader, Side, Texture } from 'three'
import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from 'react'

import Controls from '~/components/Controls'

type ImageTextureProps = {
    position: number[]
}

const ImageTexture = ({ position }: ImageTextureProps) => {
    const { gl, camera } = useThree()
    const [rotation, setRotation] = useState(0)

    const canvasWidth = 500,
        canvasHeight = 250,
        radiusTop = canvasWidth / (2 * Math.PI),
        radiusBottom = radiusTop,
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
    ctx.font = '50pt Arial'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('Moving Borders', ctx.canvas.width / 2, ctx.canvas.height / 2)

    useFrame(() => {
        setRotation(rotation + 10 / 1000)
    })

    return (
        <>
            <mesh scale={[1, 1, 1]} rotation={[0.4, -rotation, 0]}>
                {/* <boxBufferGeometry attach="geometry" args={[2, 2, 2]} /> */}
                <cylinderBufferGeometry
                    attach="geometry"
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
                <meshBasicMaterial attach="material" color={'white'} side={DoubleSide} transparent>
                    <canvasTexture
                        attach="map"
                        image={ctx.canvas}
                        minFilter={LinearFilter}
                        anisotropy={gl.getMaxAnisotropy()}
                    />
                </meshBasicMaterial>
            </mesh>
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
