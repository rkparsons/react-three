import React, { ReactNode } from 'react'

import { Box } from './Scene.style'
import EditButton from '~/components/EditButton'

type ViewProps = {
    children: ReactNode
}

export default ({ children }: ViewProps) => {
    return (
        <Box>
            {children}
            <EditButton />
        </Box>
    )
}
