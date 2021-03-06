import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Community } from "./Community";
import CommunityIcon from "./svg/Community.svg";
import MedicalEducatorsIcon from "./svg/MedicalEducators.svg";
import MedicalProfessionalIcon from "./svg/MedicalProfessional.svg";
import PersonalTrainerIcon from "./svg/PersonalTrainer.svg";
import { Link } from 'react-router-dom'
import style from "./Community.module.css";

import homeIconInactive from "../Footer/homeimginactive.svg";
import groupIconActive from "../Footer/groupimg.svg";
import caddyIconInactive from "../Footer/Vector.svg";

class PeopleConnect extends Component
{
    render ()
    {
        document.getElementById("homeicon").src = `${ homeIconInactive }`;
        document.getElementById("communityicon").src = `${ groupIconActive }`;
        document.getElementById("caddyicon").src = `${ caddyIconInactive }`;


        return (
            <div className="container d-flex align-items-center flex-wrap mt-3 flex-column">
                <Link to="/CommunityGroups" className={style.linkStyle}>
                    <div className="row mb-3">
                        <Community
                            img={CommunityIcon}
                            heading='Community'
                            body='Connect with people who are in the same boat as you and build a community!'
                        />
                    </div>
                </Link>
                <div className="row mb-3">
                    <Community
                        img={MedicalEducatorsIcon}
                        heading='Medical Professional'
                        body='Get in touch with experienced Diabetologists, Physicians and Psychologists.'
                    />
                </div>
                <div className="row mb-3">
                    <Community
                        img={MedicalProfessionalIcon}
                        heading='Medical Educators'
                        body='Ask as many questions as you want about diabetes and connect with a Medical Educator.'
                    />
                </div>
                <div className="row mb-3">
                    <Community
                        img={PersonalTrainerIcon}
                        heading='Personal Trainer'
                        body='Depend on a professional to motivate you everyday!'
                    />
                </div>
            </div>
        );
    }
}

// export default PeopleConnect;
export { PeopleConnect };