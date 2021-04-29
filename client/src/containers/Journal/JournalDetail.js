import React from 'react'
import PropTypes from "prop-types"
import Moment from 'react-moment'

import { SingleLineLoader, MultipleLineLoader } from 'Components/utilities/ContentLoader/ContentLoader'

function JournalDetail ({ title, description, date }) {
    return (
        <div>
            <h2>{title}</h2>
            <h6 className="text-dark"><Moment format="dddd, DD MMMM YYYY">{date}</Moment></h6>
            {/* <h6 className="text-dark">{date}</h6> */}
            <br />
            <p>{description}</p>
        </div>
    )
}

JournalDetail.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

JournalDetail.defaultProps = {
    title: <SingleLineLoader height={24} width={400} />,
    description: <MultipleLineLoader />,
    date: <SingleLineLoader />
}

export default JournalDetail