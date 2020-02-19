import { Canvas, useFrame, useLoader, useUpdate } from 'react-three-fiber'
import { FontLoader, Group, Mesh, TextBufferGeometry, Vector3 } from 'three'
import React, { Suspense, useMemo, useRef } from 'react'

function Text({
    children = 'testing',
    vAlign = 'center',
    hAlign = 'center',
    size = 1,
    color = '#000000',
    ...props
}) {
    const mesh = useRef<Mesh>()
    const font = useLoader(
        FontLoader,
        'https://threejsfundamentals.org/threejs/resources/threejs/fonts/helvetiker_regular.typeface.json'
    )
    const config = useMemo(
        () => ({
            font,
            size: 100,
            height: 30,
            curveSegments: 32,
            bevelEnabled: true,
            bevelThickness: 6,
            bevelSize: 2.5,
            bevelOffset: 0,
            bevelSegments: 8,
        }),
        [font]
    )

    const text = useUpdate<TextBufferGeometry>(
        self => {
            if (mesh.current) {
                self.computeBoundingBox()
                self.boundingBox.getCenter(mesh.current.position).multiplyScalar(-1)
            }
        },
        [children]
    )
    return (
        <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
            <mesh ref={mesh}>
                <textBufferGeometry ref={text} attach="geometry" args={[children, config]} />
                <meshNormalMaterial attach="material" />
            </mesh>
        </group>
    )
}

function AnimatedTextGroup() {
    const ref = useRef<Group>()
    useFrame(({ clock }) => {
        if (ref && ref.current) {
            const speed = 0.1
            const rotation = clock.getElapsedTime() * speed
            ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z = rotation
        }
    })
    return (
        <group ref={ref}>
            <Text hAlign="left" position={[0, 4.2, 0]} children="REACT" />
            <Text hAlign="left" position={[0, -8, 0]} children="THREE" />
        </group>
    )
}

type TextSceneProps = {
    isVisible: boolean
}

export default ({ isVisible }: TextSceneProps) => {
    return (
        <Canvas invalidateFrameloop={!isVisible} camera={{ position: [0, 0, 35] }}>
            <ambientLight intensity={2} />
            <pointLight position={[40, 40, 40]} />
            <Suspense fallback={null}>
                <AnimatedTextGroup />
            </Suspense>
        </Canvas>
    )
}
