import React from 'react';

import './ProgressRing.scss';

import checkIcon from 'assets/check.svg';
import crossIcon from 'assets/cross.svg';

const ProgressRing = ({ radius, stroke, progress, uploadError, uploadSuccess }) => {
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - progress / 100 * circumference;

    const ringColor = uploadError ? "#dc3545" : (uploadSuccess ? "#28a745" : "#007bff");

    return (
        <div className="ProgressRing__container">
            <svg
                height={radius * 2}
                width={radius * 2}
            >
            <circle
                stroke={ringColor}
                fill="transparent"
                strokeWidth={ stroke }
                strokeDasharray={ circumference + ' ' + circumference }
                style={ { strokeDashoffset } }
                r={ normalizedRadius }
                cx={ radius }
                cy={ radius }
            />
            </svg>
            {uploadSuccess ? <img src={checkIcon} alt="success"/> : <></>}
            {uploadError ? <img src={crossIcon} alt="failed" /> : <></>}
        </div>
      );
}

export default ProgressRing;