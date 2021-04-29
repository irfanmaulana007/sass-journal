import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from "prop-types"

const NavItem = ({ name, url }) => {
    return (
        <NavLink to={`/${url}`} activeClassName="active">
            <div className="nav-item d-inline p-3 text-uppercase small">{name}</div>
        </NavLink>
    )
}

NavItem.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

NavItem.defaultProps = {
    url: ''
}

export default NavItem