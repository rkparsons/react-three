import React, { ReactNode } from 'react'

import { Box } from './Scene.style'

type ViewProps = {
    children: ReactNode
}

export default ({ children }: ViewProps) => {
    return <Box>{children}</Box>
}
