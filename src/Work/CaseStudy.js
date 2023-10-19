import React from 'react';
import { Container } from '@mui/material';
import { casestudies } from './casestudies';
import CaseStudyCard from './CaseStudyCard';

function CaseStudyApp() {
  return (
    <Container maxWidth="xl" style={{ paddingLeft: '3%', paddingRight: '3%' }}>
      {casestudies.map((caseStudy, index) => (
        <CaseStudyCard key={index} caseStudy={caseStudy} />
      ))}
    </Container>
  );
}

export default CaseStudyApp;
