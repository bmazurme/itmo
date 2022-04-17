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

//import SectionAbout from './SectionAbout';

function App() {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [step, setStep] = React.useState(3);
  const [stepArticle, setStepArticle] = React.useState(6);

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
    if (window.innerWidth > 1024) {
      setStepArticle(6);
      setStep(3);
    } else if (window.innerWidth > 768) {
      setStep(2);
      setStepArticle(4);
    } else {
      setStep(1);
      setStepArticle(1);
    }
  };

  document.onreadystatechange = function(){
    if(document.readyState === 'complete'){
       // Ваш скрипт
       handleWindowResize()
    }
 }
  return (
    <>
    
    <div className='page' >
      <SectionHeader step={step}/>
      {/* <SectionAbout /> */}
      {/* <SectionIndustrial handleCardClick={handleCardClick}/>
      <SectionProjects step={step + 1}/>
      <SectionEducation/>
      <SectionArticles step={stepArticle}/>
      <SectionTeam step={step + 1}/>
      <SectionPartners/>
      <SectionContacts/>
      <SectionFooter/>
      <Popup isOpen={isPopupOpen} handleCardClick={handleCardClick}/> */}
    </div>
    </>
  );
}

export default App;