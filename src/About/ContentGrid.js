import React from 'react';
import { Grid } from '@mui/material'

const contentData = [
    {
        imgSrc: '/about/img-1.png',
        alt: 'img-1',
        title: 'Apollo Website Design',
        category: 'Website Work',
      },
    {
        imgSrc: '/about/img-2.png',
        alt: 'img-2',
        title: 'Apollo Website Design',
        category: 'Website Work',
      },
  {
    imgSrc: '/about/img-3.png',
    alt: 'img-3',
    title: 'Apollo Website Design',
    category: 'Website Work',
  },
  {
    imgSrc: '/about/img-4.png',
    alt: 'img-4',
    title: 'Cenita Marketing Campaign',
    category: 'Marketing',
  },
  {
    imgSrc: '/about/img-5.png',
    alt: 'img-5',
    title: 'Resurgence Brand Takeover',
    category: 'Branding',
  },
  {
    imgSrc: '/about/img-6.png',
    alt: 'img-6',
    title: 'Lamaran Garage',
    category: 'Branding',
  },
];

function ContentGrid() {
  const commonImageStyle = {
    width: '100%',
    height: '30vh', // Adjust the height as needed
  };

  return (
    <Grid container spacing={2} style={{ marginLeft: '3%' }}>
      {contentData.map((item, index) => (
        <Grid item xs={12} sm={12} md={4} lg={2} xl={2.9} key={index}>
          <img
            src={item.imgSrc}
            alt={item.alt}
            style={commonImageStyle}
          />
          <p>{item.title}</p>
          <p style={{ color: '#B8B8B8' }}>{item.category}</p>
        </Grid>
      ))}
    </Grid>
  );
}

export default ContentGrid;
