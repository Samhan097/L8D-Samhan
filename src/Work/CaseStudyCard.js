import React from 'react';
import { Grid, Typography,  Divider } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

const CaseStudyCard = ({ caseStudy }) => {
    const teamMembers = caseStudy.caseStudyTeam.split('\n').map((member, index) => (
        <span key={index}>
          {member}
          <br />
        </span>
      ));
  return (
    <Grid container spacing={2} style={{ marginTop: '20px', marginBottom: '20px' }}>
      {/* Image */}
      <Grid item xs={12}>
        <img src={caseStudy.imageSrc} alt={caseStudy.caseStudyName} style={{ width: '100%' }} />
      </Grid>

      {/* First Row */}
      <Grid item xs={4} style={{marginTop:20}}>
        <Typography variant='body2' style={{ color: '#B8B8B8' }}>Project Name</Typography>
        <Typography variant="h4">{caseStudy.caseStudyName}</Typography>
      </Grid>
      <Grid item xs={4} style={{marginTop:20}}>
        <Typography variant='body2' style={{ color: '#B8B8B8' }}>Project Type</Typography>
        <Typography variant="h6">{caseStudy.caseStudyType}</Typography>
      </Grid>
      <Grid item xs={4} style={{marginTop:20}}>
        <Typography variant="h4" style={{ color: '#33333366', textAlign: 'right', marginLeft: 'auto' }}>
          {caseStudy.caseStudyNumber}
        </Typography>
      </Grid>

      {/* Second Row */}
      <Grid item xs={2} style={{marginTop:20}}>
        <Typography variant='body2' style={{ color: '#33333380' }}>Project Duration</Typography>
        <Typography variant="body2">{caseStudy.caseStudyDuration}</Typography>
      </Grid>
      <Grid item xs={2} style={{marginTop:20}}>
        <Typography variant='body2' style={{ color: '#33333380' }}>Project Team</Typography>
        <Typography variant="body2" style={{ whiteSpace: 'pre-line' }}>
          {teamMembers}
        </Typography>
      </Grid>
      <Grid item xs={5} style={{marginTop:20}}>
        <Typography variant='body2' style={{ color: '#33333380' }}>Project Description</Typography>
        <Typography variant="body2" style={{ width: 300 }}>{caseStudy.caseStudyDescription}</Typography>
      </Grid>
      <Grid item xs={3} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end',marginTop:100 }}>
        <span style={{ marginRight: '8px' }}>
          <Typography variant="h5" style={{ color: '#333333' }}>View Case Study</Typography>
        </span>
        <FontAwesomeIcon icon={faCircleArrowRight} style={{fontSize:30,color:'#6E6E6E',marginLeft:20}} />
      </Grid>

      {/* Horizontal Line (Divider) */}
      <Grid item xs={12} style={{ marginBottom: '20px',marginTop:40 }}>
        <Divider />
      </Grid>
    </Grid>
  );
};

export default CaseStudyCard;
