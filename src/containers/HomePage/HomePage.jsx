import React from 'react';

import SignInWithGoogle from 'components/SignInWithGoogle/SignInWithGoogle';

import './HomePage.scss';

const HomePage = () => {
    return (
        <div className="HomePage__container">
            <div className="HomePage__animation">
                <div className="HomePage__animation_item">&nbsp;</div>
                <div className="HomePage__animation_item">&nbsp;</div>
                <div className="HomePage__animation_item">&nbsp;</div>
                <div className="HomePage__animation_item">&nbsp;</div>
                <div className="HomePage__animation_item">&nbsp;</div>
                <div className="HomePage__animation_item">&nbsp;</div>
            </div>
            <div className="HomePage__content">
                <h1>Waveform</h1>
                <p>A powerful DAW with the convenience of the internet.</p>
                <SignInWithGoogle />
            </div>
        </div>
    )
}

export default HomePage;