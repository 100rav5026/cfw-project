import React from 'react';
import RegistrationImageOne from './RegistrationImg1';
import RegistrationPageContent from './RegistrationPageContent';
import RegistrationImg from './Registrationmg';
import RegistrationImageTwo from './RegistrationImage2';

import Footer from './footer';


const Registration = () => {
    return (
        <div>
            <div className='flexbox-container-reg'>
                <div className='flexbox-item-reg flexbox-item-reg-1'><RegistrationImageOne /></div>
                <div className='flexbox-item-reg flexbox-item-reg-2'><RegistrationPageContent /></div>
                <div className='flexbox-item-reg flexbox-item-reg-3'><RegistrationImg /></div>
                <div className='flexbox-item-reg flexbox-item-reg-4'><RegistrationImageTwo /></div>
            </div>
            <Footer />
        </div>
    )
};

export default Registration;