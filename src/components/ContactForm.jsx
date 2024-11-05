import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../assets/css/contact_form.css';
import LocationOn from '@mui/icons-material/LocationOn';
import { Email, Phone } from '@mui/icons-material';
import { Alert, Button } from '@mui/material';

const ContactForm = ({ animation, id, key }) => {
    const [state, setState] = useState({
        success: '',
        error: '',
    })
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_t52muz5', 'template_3vooeka', form.current, {
                publicKey: 'a2Zw2eEHggBPCpNTU',
            })
            .then(
                () => {
                    setState((prevState)=>({...prevState, success: 'Message sent successfully. I will be response very soon. Thank you.'}))
                    console.log('SUCCESS!');
                    form.current.reset();
                },
                (error) => {
                    setState((prevState)=>({...prevState, error: 'Message sent failed!'}))
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className="mysection" data-aos={animation} id={id} key={key}>
            <div className="my-contact">
                <div className="title">
                    <h2 className="mysection-title">Contact</h2>
                    <h3 className="mysection-subtitle">Feel free to ask me</h3>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="d-flex justify-contnet-between gap-3 mb-5">
                            <div>
                               <i> <LocationOn /></i>
                            </div>
                            <div>
                                <strong>Address</strong><br />
                                <span>Rangamati Sadar, Chittagong Division, Bangladesh</span>
                            </div>
                        </div>
                        <div className="d-flex justify-contnet-between gap-3 mb-5">
                            <div>
                                <i><Email /></i>
                            </div>
                            <div>
                                <strong>Email</strong><br />
                                <span>jagadishchakma401@gmail.com</span>
                            </div>
                        </div>
                        <div className="d-flex justify-contnet-between gap-3 mb-5">
                            <div>
                                <i><Phone /></i>
                            </div>
                            <div>
                                <strong>Phone</strong><br />
                                <span>+8801608355518</span>
                            </div>
                        </div>


                    </div>
                    <div className="col-md-6">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="form-floating mb-3 col-12">
                                <input type="text" name="user_name" className="form-control" placeholder='' required />
                                <label htmlFor="user_name">Your Name</label>
                            </div>
                            <div className="form-floating mb-3 col-12">
                                <input type="email" name="user_email" className="form-control" placeholder='' required />
                                <label htmlFor="user_email">Your Email</label>
                            </div>
                            <div className="form-floating mb-3 col-12">
                                <textarea name="message" className="form-control" placeholder='' required />
                                <label htmlFor="message">Your Message</label>
                            </div>
                            <div className='mb-3'>
                                {state.success && <Alert severity="success">{state.success}</Alert>}
                                {state.error && <Alert severity="error">{state.error}</Alert>}
                            </div>
                            <Button type="submit" variant="contained" color="success" sx={{
                                backgroundColor: 'rgb(255, 205, 69)',  // Custom color
                                color: 'black',
                                borderRadius: '15px',
                                width: '100%',
                                '&:hover': {
                                    backgroundColor: 'rgb(51, 51, 51)',  // Hover color
                                    color: 'white',
                                    boxShadow: '0px 0px 7px rgb(255, 205, 69)',
                                },
                            }}>
                                send message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm