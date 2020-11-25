import React from 'react';

import './PanelHeading.scss';

const PanelHeading = ({ text }) => {
    return (
        <h1 className="PanelHeading__text">{text.toUpperCase()}</h1>
    )
}

export default PanelHeading;