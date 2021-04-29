import React from 'react';
import PropTypes from "prop-types"

import LoadersComponent from 'Components/utilities/Loaders/Loaders'
import MessageComponent from 'Components/utilities/Loaders/Message'

import './Loaders.scss'

class Loaders extends React.Component {
    render() {
        return (
            <div id="loaders" className={this.props.display}>
                <div className="loaders">
                    <center>
				    	<LoadersComponent />
                    </center>
			    	<br/>
			    	<MessageComponent message={this.props.message} />
                </div>
            </div>
        )
    }
}

Loaders.propTypes = {
    display: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
}

export default Loaders;