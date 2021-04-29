import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types"

import { SingleLineLoader } from 'Components/utilities/ContentLoader/ContentLoader'
import Button from 'Components/utilities/Button/Button'

export default function JournalItem ({ id, title, description, date }) {
    return (
        <div className="card">
            <div className="card-header bg-dark text-white">
                <h5>{title}</h5>
                <h6 className="small mb-0 txt-light">{date}</h6>
            </div>

            <div className="card-body">
                {description}
            </div>

            <div className="card-footer text-right">
                <Link to={`journal/detail?journalId=${id}`}>
                    <Button label="read more" />
                </Link>
            </div>
        </div>
    )
}

JournalItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

JournalItem.defaultProps = {
    title: <SingleLineLoader />,
    date: <SingleLineLoader />,
    description: <SingleLineLoader />
}