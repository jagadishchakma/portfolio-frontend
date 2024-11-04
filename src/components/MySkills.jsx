import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { useSpring, animated } from 'react-spring';
import '../assets/css/my_skills.css';

const SkillProgressBar = ({ skill, level }) => {
  const [visible, setVisible] = useState(false);

  const { width } = useSpring({
    width: visible ? `${level}%` : '0%',
    config: { duration: 1000 },
  });

  return (
    <VisibilitySensor onChange={(isVisible) => setVisible(isVisible)} partialVisibility>
      <div style={{ margin: '1em 0' }}>
        <h4>{skill}</h4>
        <div style={{ background: '#eee', borderRadius: '4px', overflow: 'hidden', position: 'relative', height: '20px' }}>
          <animated.div
            style={{
              width,
              height: '100%',
              background: 'rgb(255, 205, 69)',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'black', // Text color inside progress bar
              fontWeight: 'bold',
              fontSize: '14px',
            }}
          >
            {visible ? `${level}%` : ''}
          </animated.div>
        </div>
      </div>
    </VisibilitySensor>
  );
};


const MySkills = ({animation, id, key}) => {
    return (
        <div className='mysection' data-aos={animation} id={id} key={key}>
            <div className="my-skills">
                <div className="title">
                <h2 className='mysection-title'>Skills</h2>
                <h3 className="mysection-subtitle">I loved to interact with code</h3>
                </div>
                <div className="my-skills-container">
                    <div className="row">
                        <div className="col-md-6">
                            <h6 className="text-center">Technical Skills</h6>
                            <SkillProgressBar skill="JavaScript" level={90} color='rgb(255, 205, 69)'/>
                            <SkillProgressBar skill="React" level={85} color='rgb(255, 205, 69)'/>
                            <SkillProgressBar skill="Python" level={60} color='rgb(255, 205, 69)'/>
                            <SkillProgressBar skill="Django" level={80} color='rgb(255, 205, 69)'/>
                            <SkillProgressBar skill="CSS" level={90} color='rgb(255, 205, 69)'/>
                            <SkillProgressBar skill="HTML" level={95} color='rgb(255, 205, 69)'/>
                        </div>
                        <div className="col-md-6">
                            <h6 className="text-center">Soft Skills</h6>
                            <SkillProgressBar skill="AI Tools" level={99} color='rgb(255, 205, 69)'/>
                            <SkillProgressBar skill="Git" level={90} color='rgb(255, 205, 69)'/>
                            <SkillProgressBar skill="Searching" level={95} color='rgb(255, 205, 69)'/>
                            <SkillProgressBar skill="VS Code" level={95} color='rgb(255, 205, 69)'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySkills;