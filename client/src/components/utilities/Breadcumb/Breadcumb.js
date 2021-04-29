import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import _ from 'lodash'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function Breadcumb ({ siteList }) {
    return (
        <div className="mb-4 small text-capitalize">
            <Link to={`/${_.first(siteList)}`}>
                <FontAwesomeIcon className="mr-1" icon={faChevronLeft} /> {_.first(siteList)}
            </Link>
            <span className="ml-2 mr-1 font-weight-bold">/</span> {_.last(siteList)}
        </div>
    )
}

Breadcumb.propTypes = {
    siteList: PropTypes.array.isRequired
}

export default Breadcumb