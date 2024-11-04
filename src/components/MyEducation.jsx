import React from 'react';
import '../assets/css/education.css';
import education from '../assets/img/education2.png';
import { Box } from '@mui/material';

const MyEducation = ({ animation, id, key }) => {
    return (
        <div className='mysection' data-aos={animation} id={id} key={key}>
            <div className="my-education">
                <div className="title">
                    <h2 className='mysection-title'>Education</h2>
                    <h3 className="mysection-subtitle">From non-cse background</h3>
                </div>
                <div className="d-flex justify-content-center align-items-center gap-5">
                    <div className="eduction-profile">
                        <Box
                            component="img"
                            sx={{
                                height: 350,
                                width: 350,
                                maxHeight: { xs: 350, md: 300 },
                                maxWidth: { xs: 350, md: 300 },
                            }}
                            alt="Jagadish Chakma"
                            src={education}
                        />
                    </div>
                    <div className="eduction-list">
                        <p>
                            <strong>BBA - Bachelor of Business Administration </strong><br />
                            <strong>Accounting</strong> <br />
                            <span>National University</span><br />
                            <span>2017-2018 Session</span><br />
                            <span>Ended 2023</span><br />
                        </p>
                        <p>
                            <strong>HSC - Higher School Certificate </strong><br />
                            <strong>Business Studies</strong> <br />
                            <span>Rangamati Govt. College</span><br />
                            <span>2015-2017 Session</span><br />
                            <span>Ended 2017</span><br />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyEducation;