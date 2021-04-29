import React from 'react'
import ContentLoader from "react-content-loader"
import PropTypes from 'prop-types'

export function SingleLineLoader ({ height, width }) {
    return (
        <ContentLoader height={height} width={width}>
            <rect x="0" y="0" rx="3" ry="3" width={width} height={height} /> 
        </ContentLoader>
    )
}

SingleLineLoader.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number
}

SingleLineLoader.defaultProps = {
    height: 12,
    width: 200
}

export function MultipleLineLoader ({ height, width }) {
    return (
        <ContentLoader height={height * 4 + 100} width={width}>
            <rect x="0" y="0" rx="3" ry="3" width={width} height={height} /> 
            <rect x="0" y="30" rx="3" ry="3" width={width} height={height} /> 
            <rect x="0" y="60" rx="3" ry="3" width={width} height={height} /> 
            <rect x="0" y="90" rx="3" ry="3" width={width/3} height={height} /> 
        </ContentLoader>
    )
}

MultipleLineLoader.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number
}

MultipleLineLoader.defaultProps = {
    height: 12,
    width: 1000
}

export function JournalListLoader ({ height, width }) {
    return (
        <ContentLoader height={350} width={width*5}>
            <rect x="20" y="0" rx="3" ry="3" width={width} height={height} /> 
            <rect x="400" y="0" rx="3" ry="3" width={width} height={height} /> 
            <rect x="780" y="0" rx="3" ry="3" width={width} height={height} /> 
        </ContentLoader>
    )
}

JournalListLoader.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number
}

JournalListLoader.defaultProps = {
    height: 320,
    width: 350
}