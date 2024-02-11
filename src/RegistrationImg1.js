import React from 'react';
import RegistrationImage from './images/registrationPage1.jpeg'
import RegistrationImg2 from './images/RegistrationImage6.png';

const RegistrationImageOne = () => {
    return (
        <div className='reg-images-1' >
            <div className="image-container-1">
                <img src={RegistrationImage} alt="Background" className="background-image-1" />
                <img src={RegistrationImg2} alt="Background" className="background-image-2" />
            </div>
        </div>


    );
};

export default RegistrationImageOne;