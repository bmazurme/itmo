import '../index.css';
import React from 'react';
import SectionHeader from './SectionHeader';
import SectionArticles from './SectionArticles';
import SectionTeam from './SectionTeam';
import SectionIndustrial from './SectionIndustrial';
import SectionProjects from './SectionProjects';
import SectionMagistr from './SectionMagistr';
import SectionForm from './SectionForm';
import SectionFooter from './SectionFooter';

function App() {
  return (
    <div className='page'>
      <SectionHeader/>
      <SectionIndustrial/>
      <SectionProjects/>
      <SectionMagistr/>
      <SectionArticles/>
      <SectionTeam/>
      <SectionForm/>
      <SectionFooter/>
    </div>
  );
}

export default App;