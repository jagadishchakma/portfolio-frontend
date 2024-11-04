import React, { useEffect, useState } from 'react';
import designationIntroduction from '../data/designationIntroduction';
import '../assets/css/desig_intro.css';
import { Button } from '@mui/material';

const DesignationIntroduction = ({ animation, id, key }) => {
    const [designation, setDesignation] = useState('');
    const [introduction, setIntroduction] = useState('');

    useEffect(() => {
        let index = 0;
        let current = 0;
        let speed = 100;

        function typeText() {
            // Full text for the current item
            const desigText = designationIntroduction[current]['designation'];
            const introText = designationIntroduction[current]['introduction'];

            // Letter for the current index
            const desigLetter = desigText[index];
            const introLetter = introText[index];

            // Update letter state for designation
            if (index < desigText.length) {
                setDesignation((prevState) => prevState + desigLetter);
            } else {
                // Change speed once designation text is fully traversed
                speed = 30;
            }

            // Update letter state for introduction
            if (index < introText.length) {
                setIntroduction((prevState) => prevState + introLetter);
            }

            index++; // Increase index

            // Check if traversal for the current item is complete
            if (index > introText.length) {
                const count = designationIntroduction.length;

                if (current + 1 === count) {
                    // If we've reached the end of the list, reset
                    setTimeout(() => {
                        current = 0;
                        setDesignation('');
                        setIntroduction('');
                        index = 0;
                        speed = 100;
                        typeText(); // Restart from the beginning
                    }, 4000);
                } else {
                    // Move to the next item in the list
                    setTimeout(() => {
                        current++;
                        setDesignation('');
                        setIntroduction('');
                        index = 0;
                        speed = 100;
                        typeText(); // Continue with the next item
                    }, 4000);
                }
            } else {
                // Continue typing with the updated speed
                setTimeout(typeText, speed);
            }
        }

        typeText(); // Start the typing animation on mount

        // Cleanup function to prevent memory leaks
        return () => {
            setDesignation(''); // Reset designation state
            setIntroduction(''); // Reset introduction state
        };
    }, []);

    return (
        <div className='mysection' data-aos={animation} id={id} key={key}>
            <div className="desig-intro">
                <div className="row align-items-center justify-content-between">
                    <div className='desig col-5'>
                        <h1><span className='text-color google-font'>I'm a</span> <br /> {designation}</h1>
                    </div>
                    <div className="desig-intro-divider col-2">

                    </div>
                    <div className='intro col-5'>
                        <p>{introduction}</p>
                        <Button
                            variant="contained"
                            href='https://drive.google.com/file/d/1hjpdPjSf2haHubiaumpCDQQZNNOzmbBv/view?usp=drive_link'
                            target='_blank'
                            color="success"
                            sx={{
                                backgroundColor: 'rgb(255, 205, 69)',  // Custom color
                                color: 'black',
                                borderRadius: '15px',
                                '&:hover': {
                                    backgroundColor: 'rgb(51, 51, 51)',  // Hover color
                                    color: 'white',
                                    boxShadow: '0px 0px 7px rgb(255, 205, 69)',
                                },
                            }}
                        >
                             Resume
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignationIntroduction;