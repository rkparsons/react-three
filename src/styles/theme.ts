import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

import fontFace from './fontFace'
import palette from './palette'

export default (isDarkMode = false) =>
    responsiveFontSizes(
        createMuiTheme({
            spacing: factor => `${0.25 * factor}rem`,
            palette: {
                type: isDarkMode ? 'dark' : 'light',
                ...palette,
            },
            overrides: {
                MuiCssBaseline: {
                    '@global': {
                        '@font-face': [fontFace],
                    },
                },
            },
        })
    )
