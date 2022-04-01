import '../index.css';
import React from 'react';
import SectionHeader from './SectionHeader';
import SectionArticles from './SectionArticles';
import SectionTeam from './SectionTeam';
import SectionIndustrial from './SectionIndustrial';
import SectionProjects from './SectionProjects';
import SectionMagistr from './SectionMagistr';
import SectionPartners from './SectionPartners';
import SectionContacts from './SectionContacts';
import SectionFooter from './SectionFooter';
import Popup from './Popup';

function App() {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  function handleCardClick() {
    console.log(isPopupOpen);
    setIsPopupOpen(!isPopupOpen);
  }

  return (
    <>
    <div className='page'>
      <SectionHeader/>
      <SectionIndustrial handleCardClick={handleCardClick}/>
      <SectionProjects/>
      <SectionMagistr/>
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