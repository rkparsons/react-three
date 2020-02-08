import * as THREE from 'three'
import { VertexNormalsHelper as VertexNormalsHelperBase } from 'three/examples/jsm/helpers/VertexNormalsHelper'
import { RectAreaLightHelper as RectAreaLightHelperBase } from 'three/examples/jsm/helpers/RectAreaLightHelper'
import { PositionalAudioHelper as PositionalAudioHelperBase } from 'three/examples/jsm/helpers/PositionalAudioHelper'
import { FaceNormalsHelper as FaceNormalsHelperBase } from 'three/examples/jsm/helpers/FaceNormalsHelper'
import { Object3D, LineSegments } from 'three'

declare module 'three' {
    export class VertexNormalsHelper extends VertexNormalsHelperBase {}
    export class RectAreaLightHelper extends RectAreaLightHelperBase {}
    export class PositionalAudioHelper extends PositionalAudioHelperBase {}
    export class FaceNormalsHelper extends FaceNormalsHelperBase {}
}
