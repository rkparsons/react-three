import { Canvas, useFrame, useLoader } from 'react-three-fiber'
import { Color, DoubleSide, Side, TextureLoader } from 'three'
import React, { Suspense, useState } from 'react'

import Controls from '~/components/Controls'

type ImageTextureProps = {
    position: number[]
}

const ImageTexture = ({ position }: ImageTextureProps) => {
    const [rotation, setRotation] = useState(0)

    const texture = useLoader(
        TextureLoader,
        'https://uploads.codesandbox.io/uploads/user/17b8b653-e409-43ab-bc76-4dc7db446c10/JUa3-mappa_testo.png'
    )
    texture.repeat.y = 71 / 2048
    texture.offset.y = 1 - texture.repeat.y

    useFrame(() => {
        setRotation(rotation + 0.01)
    })

    return (
        <mesh position={position} scale={[1.5, 1.5, 1.5]} rotation={[0.4, -rotation, 0]}>
            <cylinderBufferGeometry attach="geometry" args={[2, 2, 0.5, 64, 1, true]} />
            <meshStandardMaterial
                attach="material"
                map={texture}
                side={DoubleSide}
                color="orange"
            />
        </mesh>
    )
}

type ViewProps = {
    controlsOpacity: number
}

export default ({ controlsOpacity }: ViewProps) => {
    // const controls = [
    //     {
    //         label: 'Size',
    //         value: size,
    //         set: setSize,
    //         min: 1,
    //         max: 100,
    //     },
    //     {
    //         label: 'Rotation Speed',
    //         value: rotationSpeed,
    //         set: setRotationSpeed,
    //         min: 1,
    //         max: 100,
    //     },
    // ]

    return (
        <>
            {/* <Controls opacity={controlsOpacity} controls={controls} /> */}
            <Canvas>
                <Suspense fallback={null}>
                    <ImageTexture position={[0, 0, 0]} />
                </Suspense>
            </Canvas>
        </>
    )
}
