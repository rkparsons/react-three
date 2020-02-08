import dotenv from 'dotenv'

const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'

console.log(`Using environment config: ${activeEnv}`)

dotenv.config({
    path: `.env.${activeEnv}`,
})

type Plugins = Array<
    | string
    | {
          resolve: string
          options: Record<string, any>
      }
>

export const plugins: Plugins = [
    {
        resolve: `gatsby-plugin-typescript`,
        options: {
            isTSX: true,
            allExtensions: true,
        },
    },
    `gatsby-plugin-typescript-checker`,
    {
        resolve: `gatsby-plugin-material-ui`,
        options: {
            stylesProvider: {
                injectFirst: true,
            },
        },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
        resolve: `gatsby-plugin-layout`,
        options: {
            component: require.resolve(`../../src/components/Layout`),
        },
    },
]
