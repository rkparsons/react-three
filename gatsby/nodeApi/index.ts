import { GatsbyNode } from 'gatsby'
import { onCreateWebpackConfig } from './onCreateWebpackConfig'

export const nodeAPI: GatsbyNode = {
    onCreateWebpackConfig,
}
