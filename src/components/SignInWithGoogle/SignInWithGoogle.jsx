import React from 'react';

import './SignInWithGoogle.scss';

import normalButton from 'assets/btn_google_signin_light_normal_web.png';

const SignInWithGoogle = () => {
    return (
        <img 
            class="SignInWithGoogle__btn"
            src={normalButton} 
            alt="sign-in-with-google"
        />
    )
}

export default SignInWithGoogle;