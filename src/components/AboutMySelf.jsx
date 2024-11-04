import { Box } from '@mui/material';
import React from 'react';
import profile from '../assets/img/profile2.png';
import '../assets/css/about_myself.css';

const AboutMySelf = ({ animation, id, key }) => {
    return (
        <div className="mysection" data-aos={animation} id={id} key={key}>
            <div className="about-myself">
                <div className="title">
                    <h2 className="mysection-title">About Me</h2>
                    <h3 className="mysection-subtitle">A paasionate web developer</h3>
                </div>
                <div className="d-flex justify-content-center align-items-center gap-3">
                    <div className="about-myself-description">
                        <p>
                            Hi! My name is Jagadish Chakma. I'm a **Web Developer**. I graduated in 2023 from National University and my subject is **Accounting**. Nowadays, working as a Web Developer. Working on Python, Django, and JavaScript tech fields.  Even if my background is in a non-tech field I am passionate about working in the Computer science technical field.</p>

                        <p>I do website design, web app development, create rest API using Python Django Rest Framework(DRF), and responsive design. I can play the role of both sides frontend or backend developer. </p>

                        <p>Any possible business or institution problems, or ideas I help to convert into web solutions. I can contribute by removing repeated code, writing clean and understandable code, following standard code, and avoiding security-less code.
                        </p>
                    </div>
                    <div className="about-myself-profile">
                        <Box
                            component="img"
                            sx={{
                                maxHeight: { xs: '100%', md: 350 },
                                maxWidth: { xs: '100%', md: 350 },
                            }}
                            alt="Jagadish Chakma"
                            src={profile}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMySelf;