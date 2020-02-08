import * as ROUTES from './node_modules/~/constants/routes'

import NavItem from './node_modules/~/components/NavItem'
import { NavList } from './Navigation.style'
import React from 'react'

export default () => (
    <NavList>
        <li>
            <NavItem to={ROUTES.HOME} title="HOME" />
        </li>
    </NavList>
)
