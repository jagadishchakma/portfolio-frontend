import React from 'react';
import '../assets/css/footer.css';
import { Facebook, GitHub, LinkedIn } from '@mui/icons-material';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="my-footer container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-6 col-12">
                        <div className="d-flex align-items-center gap-3">
                            <a href="https://www.linkedin.com/in/jagadishchakma/" target='_blank'><i><LinkedIn/></i></a>
                            <a href="https://github.com/jagadishchakma" target='_blank'><i><GitHub/></i></a>
                            <a href="https://www.facebook.com/jagadish.chakma.401" target='_blank'><i><Facebook/></i></a>

                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <p className='text-end'>© All Rights Reserved 2024 | Jagadish Chakma</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;