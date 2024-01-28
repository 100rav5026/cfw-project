import React from 'react';
import RegistrationImage from './images/registrationPage1.jpeg'
import RegistrationImg2 from './images/RegistrationImage6.png';
import RegistrationImg from './Registrationmg';
import RegistrationPageContent from './RegistrationPageContent';
import RegistrationImageTwo from './RegistrationImage2';

const RegistrationImageOne = () => {
    return ( <div  >
            <div className = "image-container-1">
        <img src = { RegistrationImage } alt = "Background" className = "background-image-1"/>
        <img src = { RegistrationImg2 } alt = "Background" className = "background-image-2"/>
</div>
         <RegistrationPageContent/>
        <RegistrationImg/>
        <RegistrationImageTwo/>
        </div>
        

    );
};

export default RegistrationImageOne;