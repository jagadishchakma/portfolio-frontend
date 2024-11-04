import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code'
import StarIcon from '@mui/icons-material/Star';
import { Box, Button } from '@mui/material';
import project1 from '../assets/img/projects/project1.png'
import project2 from '../assets/img/projects/project2.png'

const MyProject = ({ animation, id, key }) => {
    return (
        <div className='mysection' data-aos={animation} id={id} key={key}>
            <div className="my-project">
                <div className="title">
                    <h2 className="mysection-title">Projects</h2>
                    <h3 className="mysection-subtitle">Looks and see</h3>
                </div>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(51, 51, 51)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(51, 51, 51)' }}
                        date="Oct 2024"
                        iconStyle={{ background: 'rgb(255, 205, 69)', color: '#fff' }}
                        icon={<CodeIcon />}
                    >
                        <Box
                            component="img"
                            sx={{
                                maxHeight: { xs: '100%', md: '100%' },
                                maxWidth: { xs: '100%', md: '100%' },
                            }}
                            alt="Bank Management System Solutions"
                            src={project1}
                        />
                        <h3 className="vertical-timeline-element-title">Bank Management</h3>
                        <h6 className="vertical-timeline-element-subtitle">A banking management system solutions.</h6>
                        <p>
                            <strong>Technology Used:</strong> <br />
                            <ul>
                                <li><strong>Backend:</strong> Python, Django, DRF, SQLite</li>
                                <li><strong>Frontend:</strong> Nextjs, Reactjs, Bootstrap</li>
                            </ul>
                        </p>
                        <p>
                            <strong>Features:</strong> <br />
                            <ul>
                                <li>Integrated payment getway</li>
                                <li>User account management</li>
                                <li>Deposit</li>
                                <li>Withdraw</li>
                                <li>Loan request/accept </li>
                                <li>Balance Transfer</li>
                                <li>Quick Transfer</li>
                            </ul>
                        </p>
                        <div className="d-flex justify-content-start align-items-center gap-3 flex-wrap">
                            <Button href="https://bank.tfbfoundation.org/" variant="contained" color="secondary" size='small' target="_blank" sx={{
                                backgroundColor: 'rgb(255, 205, 69)',  // Custom color
                                color: 'black',
                                borderRadius: '15px',
                                '&:hover': {
                                    backgroundColor: 'rgb(51, 51, 51)',  // Hover color
                                    color: 'white',
                                    boxShadow: '0px 0px 7px rgb(255, 205, 69)',
                                },
                            }}>
                                Live
                            </Button>
                            <Button href="https://github.com/jagadishchakma/tfbOnlineBank-frontend" variant="contained" color="success" size='small' target="_blank" sx={{
                                backgroundColor: 'rgb(255, 205, 69)',  // Custom color
                                color: 'black',
                                borderRadius: '15px',
                                '&:hover': {
                                    backgroundColor: 'rgb(51, 51, 51)',  // Hover color
                                    color: 'white',
                                    boxShadow: '0px 0px 7px rgb(255, 205, 69)',
                                },
                            }}>
                                Frontend Github
                            </Button>
                            <Button href="https://github.com/jagadishchakma/tfbOnlineBank-backend" variant="contained" color="info" size='small' target="_blank" sx={{
                                backgroundColor: 'rgb(255, 205, 69)',  // Custom color
                                color: 'black',
                                borderRadius: '15px',
                                '&:hover': {
                                    backgroundColor: 'rgb(51, 51, 51)',  // Hover color
                                    color: 'white',
                                    boxShadow: '0px 0px 7px rgb(255, 205, 69)',
                                },
                            }}>
                                Backend Github
                            </Button>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(51, 51, 51)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(51, 51, 51)' }}
                        date="Sept 2024"
                        iconStyle={{ background: 'rgb(255, 205, 69)', color: '#fff' }}
                        icon={<CodeIcon />}
                    >
                        <Box
                            component="img"
                            sx={{
                                maxHeight: { xs: '100%', md: '100%' },
                                maxWidth: { xs: '100%', md: '100%' },
                            }}
                            alt="Bank Management System Solutions"
                            src={project2}
                        />
                        <h3 className="vertical-timeline-element-title">Hotel Booking</h3>
                        <h6 className="vertical-timeline-element-subtitle">A online hotel booking system solutions.</h6>
                        <p>
                            <strong>Technology Used:</strong> <br />
                            <ul>
                                <li><strong>Backend:</strong> Python, Django, DRF, SQLite</li>
                                <li><strong>Frontend:</strong>Reactjs, Bootstrap, HTML, CSS</li>
                            </ul>
                        </p>
                        <p>
                            <strong>Features:</strong> <br />
                            <ul>
                                <li>Integrated payment getway</li>
                                <li>User account management</li>
                                <li>Hotel Book</li>
                                <li>Add/Edit/Delete Review</li>
                            </ul>
                        </p>
                        <div className="d-flex justify-content-start align-items-center gap-3 flex-wrap">
                            <Button href="https://hotel.tfbfoundation.org/" variant="contained" color="secondary" size='small' sx={{
                                backgroundColor: 'rgb(255, 205, 69)',  // Custom color
                                color: 'black',
                                borderRadius: '15px',
                                '&:hover': {
                                    backgroundColor: 'rgb(51, 51, 51)',  // Hover color
                                    color: 'white',
                                    boxShadow: '0px 0px 7px rgb(255, 205, 69)',
                                },
                            }}>
                                Live
                            </Button>
                            <Button href="https://github.com/jagadishchakma/bdhotelbook-frontend" variant="contained" color="success" size='small' sx={{
                                backgroundColor: 'rgb(255, 205, 69)',  // Custom color
                                color: 'black',
                                borderRadius: '15px',
                                '&:hover': {
                                    backgroundColor: 'rgb(51, 51, 51)',  // Hover color
                                    color: 'white',
                                    boxShadow: '0px 0px 7px rgb(255, 205, 69)',
                                },
                            }}>
                                Frontend Github
                            </Button>
                            <Button href="https://github.com/jagadishchakma/bdhotelbook-backend" variant="contained" color="info" size='small' sx={{
                                backgroundColor: 'rgb(255, 205, 69)',  // Custom color
                                color: 'black',
                                borderRadius: '15px',
                                '&:hover': {
                                    backgroundColor: 'rgb(51, 51, 51)',  // Hover color
                                    color: 'white',
                                    boxShadow: '0px 0px 7px rgb(255, 205, 69)',
                                },
                            }}>
                                Backend Github
                            </Button>
                        </div>
                    </VerticalTimelineElement>
                    {/* <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2008 - 2010"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Web Designer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                        <p>
                            User Experience, Visual Design
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2006 - 2008"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Web Designer</h3>
                        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                        <p>
                            User Experience, Visual Design
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="April 2013"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                        <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                        <p>
                            Strategy, Social Media
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="November 2012"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                        <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2002 - 2006"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                        <p>
                            Creative Direction, Visual Design
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        icon={<StarIcon />}
                    /> */}
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default MyProject;