import * as ROUTES from '~/constants/routes'

import NavItem from '~/components/NavItem'
import { NavList } from './Navigation.style'
import React from 'react'

export default () => (
    <NavList>
        <li>
            <NavItem to={ROUTES.HOME} title="HOME" />
        </li>
    </NavList>
)
