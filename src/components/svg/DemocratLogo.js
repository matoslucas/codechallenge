import React, { Component } from 'react'
import PropTypes from 'prop-types';

class DemocratLogo extends Component {
    render() {
        const { size } = this.props
        return (
            <svg width={size} height={size} viewBox="0 0 86 86">
                <circle 
                cy={'43'} 
                cx={'43'} r="37.5"
                    stroke="#00aef3"
                    stroke-width="11"
                    fill="#ffffff"
                />
                <path d="M28.5,25.5v35h16.5a17.5,17.5 0 0,0 0,-35zM38.5,34h5a9,9 0 0,1 0,18h-5z"
                    fill="#00aef3"
                />
            </svg>
        )
    }
}

DemocratLogo.propTypes = {
    size: PropTypes.number,
}

DemocratLogo.defaultProps = {
    size: 40,
}

export default DemocratLogo