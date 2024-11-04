import React, { useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import DesignationIntroduction from './components/DesignationIntroduction';
import AboutMySelf from './components/AboutMySelf';
import MyEducation from './components/MyEducation';
import MySkills from './components/MySkills';
import MyProject from './components/MyProject';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import './assets/css/responsive.css';


const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];



function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation in milliseconds
      offset: 150, // Offset for triggering animations
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
    <Navigation sections={sections}/>
    <main className='main-content'>
      <div className="conatiner">
        <DesignationIntroduction animation="fade-down" id={sections[0].id} key={sections[0].id} />
        <AboutMySelf animation="fade-up" id={sections[1].id} key={sections[1].id} />
        <MyEducation animation="fade-up" id={sections[2].id} key={sections[2].id} />
        <MySkills animation="fade-up" id={sections[3].id} key={sections[3].id} />
        <MyProject animation="fade-up" id={sections[4].id} key={sections[4].id} />
        <ContactForm animation="fade-up" id={sections[5].id} key={sections[5].id} />
      </div>
      <Footer />
    </main>
    </>
  );
}

export default App;
