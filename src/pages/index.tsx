import BoxScene from '~/components/BoxScene'
import Head from '~/components/Head'
import React from 'react'
import { graphql } from 'gatsby'

export default () => (
    <>
        <Head title="Home" />
        <ul>
            <li>3d character surrounded by radial menu</li>
            <li>scroll with depth perception effect</li>
        </ul>
        <BoxScene />
    </>
)
