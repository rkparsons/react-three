import { Canvas, useFrame, useLoader } from 'react-three-fiber'
import { CanvasTexture, Color, DoubleSide, Loader, Side, Texture } from 'three'
import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from 'react'

import Controls from '~/components/Controls'

type ImageTextureProps = {
    position: number[]
}

const ImageTexture = ({ position }: ImageTextureProps) => {
    const canvasContainer = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        if (canvasContainer.current) {
            const ctx = document.createElement('canvas').getContext('2d')!
            ctx.canvas.width = 512
            ctx.canvas.height = 128
            ctx.fillStyle = 'white'
            ctx.font = '50pt Arial'
            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle'
            ctx.fillText('Moving Borders', ctx.canvas.width / 2, ctx.canvas.height / 2)

            canvasContainer.current.appendChild(ctx.canvas)
        }
    }, [canvasContainer.current])

    return (
        <>
            <div ref={canvasContainer}></div>
            {/* <mesh
                position={position}
                scale={[1, 1, 1].map(axis => (axis * 75) / 100)}
                rotation={[0.4, 0, 0]}
            >
                <cylinderBufferGeometry attach="geometry" args={[2, 2, 0.5, 64, 1, true]} />
                <meshStandardMaterial
                    attach="material"
                    map={texture}
                    side={DoubleSide}
                    color="orange"
                />
            </mesh> */}
        </>
    )
}

type ViewProps = {
    controlsOpacity: number
}

export default ({ controlsOpacity }: ViewProps) => {
    return (
        <>
            <ImageTexture position={[0, 0, 0]} />
            {/* <Canvas>
                <Suspense fallback={null}>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <ImageTexture position={[0, 0, 0]} />
                </Suspense>
            </Canvas> */}
        </>
    )
}
