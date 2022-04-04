import '../index.css';
import React from 'react';
import SectionHeader from './SectionHeader';
import SectionArticles from './SectionArticles';
import SectionTeam from './SectionTeam';
import SectionIndustrial from './SectionIndustrial';
import SectionProjects from './SectionProjects';
import SectionEducation from './SectionEducation';
import SectionPartners from './SectionPartners';
import SectionContacts from './SectionContacts';
import SectionFooter from './SectionFooter';
import Popup from './Popup';

function App() {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [step, setStep] = React.useState(3);

  function handleCardClick() {
    setIsPopupOpen(!isPopupOpen);
  }

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, []);

  function handleWindowResize() {
    if (window.innerWidth < 767) {
      setStep(2);
    } else {
      setStep(3);
    }
  };
  

  return (
    <>
    <div className='page'>
      <SectionHeader step={step}/>
      <SectionIndustrial handleCardClick={handleCardClick}/>
      <SectionProjects/>
      <SectionEducation/>
      <SectionArticles/>
      <SectionTeam/>
      <SectionPartners/>
      <SectionContacts/>
      <SectionFooter/>
      <Popup isOpen={isPopupOpen} handleCardClick={handleCardClick}/>
    </div>
    </>
  );
}

export default App;